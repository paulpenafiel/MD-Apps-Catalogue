import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateCompleteness(user){
    if(user.name == '' || user.email== '' || user.username=='' || user.password=='' || user.gender=='' || user.usertype=='' || user.organization==''){
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
    const re =/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    return re.test(String(inputText).toLowerCase());
  }

  aplicationCompleteness(aplication){
    if(aplication.name=='' || aplication.category=='' || aplication.description=='' || aplication.appType=='' || aplication.imgPath=='' || aplication.opSystem=='' || aplication.register=='' || aplication.organization==''|| aplication.developer=='' || aplication.accessPath=='' || aplication.lastUpdate=='' || aplication.currentVersion=='' || aplication.internetConnection=='' || aplication.keywords=='' ||
      aplication.galery[0].galpath==''||aplication.galery[1].galpath==''||aplication.galery[2].galpath==''){
      return false;
    }else{
      return true;
    }
  }

  newCompleteness(newPost){
    if(newPost.type=='' || newPost.date=='' || newPost.title=='' || newPost.body=='' || newPost.source==''){
      return false;
    }else{
      return true;
    }
  }

  newEventCompleteness(newEvent){
    if(newEvent.type=='' || newEvent.date=='' || newEvent.Hour=='' || newEvent.title=='' || newEvent.body=='' || newEvent.source=='' || newEvent.price=='' || newEvent.place==''){
      return false;
    }else{
      return true;
    }
  }
}
