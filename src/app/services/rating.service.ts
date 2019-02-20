import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  readonly ratingUrl='http://localhost:3000/rating';

  constructor(private http: HttpClient) { }

  postRating(newRating: Rating){
    return this.http.post(this.ratingUrl+'/newRating',newRating);
  }

  getAverage(appId: string){
     return this.http.get(this.ratingUrl+'/avg/'+appId);
  }

 
}
