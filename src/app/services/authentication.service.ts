import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
  }

  authenticateUser(user){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers});
  }

  getUserProfile(){
    this.loadUserToken();
    let headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    // headers.append('Authorization', this.authToken);
    // headers.append('Content-Type','application/json');
    console.log(headers);
    return this.http.get('http://localhost:3000/users/Profile', {headers: headers});
  }

  storeUserData(token, user){
    localStorage.setItem('idToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadUserToken(){
    const token= localStorage.getItem('idToken');
    this.authToken=token;
    console.log(token);
  }

  loggedIn(){
    if(localStorage.getItem('idToken')==undefined){
      console.log('Hello');
      return false;
    }else{
      console.log('Goodbye');
      const helper = new JwtHelperService();
      console.log(helper.isTokenExpired(localStorage.getItem('idToken')));  
      return !helper.isTokenExpired(localStorage.getItem('idToken'));
    }
  }

  logout(){
    this.authToken=null;
    this.user = null;
    localStorage.clear();
  }
}

