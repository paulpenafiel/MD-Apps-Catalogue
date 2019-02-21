import { Component, OnInit, Input } from '@angular/core';
import { Aplication } from '../../models/aplication';
import { Category } from '../../models/category'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AplicationService } from '../../services/aplication.service';
import {CategoryService } from '../../services/category.service';
import { NgNoValidate } from '@angular/forms/src/directives/ng_no_validate_directive';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  aplications: Aplication[];
  selectedCategories: Category[];
  lastAddedAplications: Aplication[];
  lastAddedNumber: number;

  constructor(private route: ActivatedRoute, 
    private aplicationService: AplicationService,
    private location: Location, private categoryService: CategoryService) {
    }

  ngOnInit() {
    this.route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.getCategorybyName();
      this.getAplicaionbyCategory();
      
    });
    // this.getCategorybyName();
    
  }

  
  getAplicaionbyCategory(){
    const cat = this.route.snapshot.paramMap.get('cat');
    this.aplicationService.getAplicationsByCategory(cat)
    .subscribe( res =>{
      this.aplications= res as Aplication[]; 
      console.log(res);
      this.getlastAplications();
    });
  }

  getCategorybyName(){
    const name = this.route.snapshot.paramMap.get('cat');
    this.categoryService.getCategoryByName(name)
    .subscribe( res =>{
      this.selectedCategories = res as Category[]; 
      console.log(this.selectedCategories);    
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
