import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aplication } from '../models/aplication';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  readonly aplicationsUrl = 'http://localhost:3000/catalogue';
  selectedAp: Aplication;
  aplications: Aplication[];
  

  constructor(private http:HttpClient) { 
    this.selectedAp= new Aplication();
  }

  getAplications() {
    return this.http.get(this.aplicationsUrl);
  }

  getAll(){
    return this.http.get(this.aplicationsUrl+'/all');
  }

  getAplicationByID(id: String){
    return this.http.get(this.aplicationsUrl+'/'+id);
  }

  getAplicationsByCategory(cat: String){
    return this.http.get(this.aplicationsUrl+'/cat/'+cat);
  }

  postAplication(aplication: Aplication){
    return this.http.post(this.aplicationsUrl, aplication);
  }

  putAplication(aplication: Aplication){
    return this.http.put(this.aplicationsUrl+`/${aplication._id}`, aplication);
  }

  deleteAplication(_id: String){
    return this.http.delete(this.aplicationsUrl+`/${_id}`);
  }
}
