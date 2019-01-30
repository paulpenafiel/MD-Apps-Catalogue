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


  constructor(private http:HttpClient) { }

  getAplications() {
    return this.http.get(this.aplicationsUrl);
  }

  getAplicationByID(id: String){
    return this.http.get(this.aplicationsUrl+'/'+id);
  }

  getAplicationsByCategory(cat: String){
    return this.http.get(this.aplicationsUrl+'/cat/'+cat);
  }
}
