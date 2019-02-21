import { Component, OnInit } from '@angular/core';
import { AplicationService } from '../../services/aplication.service';
import { Aplication } from '../../models/aplication';

@Component({
  selector: 'app-aplications',
  templateUrl: './aplications.component.html',
  styleUrls: ['./aplications.component.css']
})
export class AplicationsComponent implements OnInit {

  aplications: Aplication[];
  lastAddedAplications: Aplication[];
  lastAddedNumber: number;
  constructor(private aplicationService: AplicationService) { }

  ngOnInit() {
    this.getAplicaions();
  }

  getAplicaions(){
    this.aplicationService.getAplications()
    .subscribe( res =>{
      this.aplications= res as Aplication[]; 
      console.log(res);
      this.getlastAplications();
    });
  }

  getlastAplications(){
    if(this.aplications.length > 4){
      this.lastAddedAplications=this.aplications.slice(Math.max(this.aplications.length - 4, 1))
    }else{
      this.lastAddedAplications=[];
    }
    this.lastAddedNumber=this.lastAddedAplications.length;
  }
}
