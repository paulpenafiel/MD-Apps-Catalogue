import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:Object;
  constructor(private authService: AuthenticationService, private router: Router, private flashMessage: FlashMessagesService) { }

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
