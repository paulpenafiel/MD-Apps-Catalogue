import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router   } from '@angular/router';

import { ValidationService } from '../../services/validation.service';
import { AuthenticationService } from '../../services/authentication.service';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: string;
  userType: string;
  password: string;
  organization: String;
  gender: String;
  imgpath: String;

  constructor( private validationService: ValidationService, private flashMessage: FlashMessagesService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    const user ={
      name: this.name,
      userType: this.userType,
      email: this.email,
      password: this.password,
      organization: this.organization,
      gender: this.gender,
      username: this.username
    }

    //required fields
    if(!this.validationService.validateCompleteness(user)){
      this.flashMessage.show('Por favor llenar todos los campos', {cssClass: 'alert-danger', timeout: 4000});
      return false;
    }

    //email format validation
    if(!this.validationService.validateEmail(user.email)){
      this.flashMessage.show('Por favor utilice un email válido', {cssClass: 'alert-danger', timeout: 4000});
      return false;
    }

    //User register
    this.authService.registerUser(user).subscribe( data =>{
      if(data['sucess']){
        this.flashMessage.show('Sus datos han sido registrados, y puede ingresar', {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/login']);
      } else{
        this.flashMessage.show('Ha habido problemas al registrar su usuario', {cssClass: 'alert-danger', timeout: 4000});
      }
    })
   
  }
}
