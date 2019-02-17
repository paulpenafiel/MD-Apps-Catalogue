import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Rating } from '../../models/rating';
import {RatingService} from '../../services/rating.service';

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
  avgValue: number;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.getAverage();
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.newValue=$event.newValue;
    // alert(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
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
      this.avgValue = res['average'];
    });
  }
}
