import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly categoryUrl = 'http://localhost:3000/category';

  constructor( private http:HttpClient) { }

  getCategoryByName(name: string){
    return this.http.get(this.categoryUrl+'/'+name);
  }
}


