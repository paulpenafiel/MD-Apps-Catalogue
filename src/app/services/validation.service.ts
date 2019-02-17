import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateCompleteness(user){
    if(user.name == undefined || user.email== undefined || user.username==undefined || user.password==undefined || user.gender==undefined || user.usertype==undefined || user.organization==undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateText(inputText){
    const re =/^(([a-zA-Z\s]+))$/;
    return re.test(String(inputText).toLowerCase());
  }
}
