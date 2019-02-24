import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Rating } from '../../models/rating';
import {RatingService} from '../../services/rating.service';
import { stringify } from '@angular/compiler/src/util';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() dataApp: string;
  @Input() dataTarget: string;
  newRating: any;
  newValue: number;
  avgValue: string;
  
  constructor(private ratingService: RatingService) { 
  
  }

  ngOnInit() { 
    if(this.dataTarget==='avg' || this.dataTarget==='panel'){
    this.getAverage();}
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.newValue=$event.newValue;
    if(confirm('Desea imgrsar su valoración de '+ this.newValue)){
      this.addRating();
    }
  }

  addRating(){
    this.newRating={
      appId: this.dataApp,
      value: this.newValue
    }
    this.ratingService.postRating(this.newRating)
    .subscribe(res =>{
      alert('rating almacenado');
    });
  }

  getAverage(){
    this.ratingService.getAverage(this.dataApp)
    .subscribe(res =>{
      this.avgValue = parseFloat(res['average']).toFixed(1);
    });
  }
}
