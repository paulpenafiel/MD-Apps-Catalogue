import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import {RatingService} from '../../services/rating.service';
import { AuthenticationService } from '../../services/authentication.service';

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
  
  constructor(private ratingService: RatingService, private authService: AuthenticationService) { 
  
  }

  ngOnInit() { 
    if(this.dataTarget==='avg' || this.dataTarget==='panel'){
    this.getAverage();}

   
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.newValue=$event.newValue;
    if(confirm('Desea ingresar su valoración de '+ this.newValue)){
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
      if(res==null){
        this.avgValue='0';
      }else{
      this.avgValue = parseFloat(res['average']).toFixed(1);}
    });
  }
}
