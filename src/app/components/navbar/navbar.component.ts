import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import {  User  } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   user: Object;
  // user ={
  //   _id: '',
  //   name: '',
  //   usertype: '',
  //   gender: '',
  //   email: '',
  //   username: '',
  //   imgPath: 'https://pngimage.net/wp-content/uploads/2018/06/logo-user-png-6.png',
  //   password: ''
  // }
  constructor(private authService: AuthenticationService, private router: Router, private flashMessage: FlashMessagesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getUserProfile()
    .subscribe(profile => {
      console.log(profile);
      this.user = profile['user'];
      
    },
    err => {
      console.log(err);
      return false;
    });
    
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('Has salido de tu cuenta', {cssClass:'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
  }
}
