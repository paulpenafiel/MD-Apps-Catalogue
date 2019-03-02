import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  // user: User;

  constructor(private authService: AuthenticationService, private router: Router, private flashMessage: FlashMessagesService, private location: Location) { }

  ngOnInit() {
  }

  loginUserSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if (data['success']) {
        this.authService.storeUserData(data['token'], data['user']);
        this.flashMessage.show('Has ingresado exitosamente', { cssClass: 'alert-success', timeout: 5000 });
        if (this.authService.isAdministrator()) {
          this.router.navigate(['dashboard']);
        } else {
          // this.router.navigate(['profile']);
          this.location.back();
        }
      } else {
        this.flashMessage.show(data['msg'], { cssClass: 'alert-danger', timeout: 5000 });
      }
    });
  }


}
