import { Component, OnInit, Input } from '@angular/core';
import { Aplication } from '../../models/aplication';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AplicationService } from '../../services/aplication.service';
import { NgNoValidate } from '@angular/forms/src/directives/ng_no_validate_directive';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  aplications: Aplication[];
  constructor(private route: ActivatedRoute, 
    private aplicationService: AplicationService,
    private location: Location) {
    }

  ngOnInit() {
    this.route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.getAplicaionbyCategory();
    });
    
  }

  
  getAplicaionbyCategory(){
    const cat = this.route.snapshot.paramMap.get('cat');
    this.aplicationService.getAplicationsByCategory(cat)
    .subscribe( res =>{
      this.aplications= res as Aplication[]; 
      console.log(res);
    });
  }
  // getAplicaionsbyCategory(){
  //   this.aplicationService.getAplications()
  //   .subscribe( res =>{
  //     this.aplications= res as Aplication[]; 
  //     console.log(res);
  //   });
  // }

}
