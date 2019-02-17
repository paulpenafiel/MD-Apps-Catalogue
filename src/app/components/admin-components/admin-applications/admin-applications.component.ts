import { Component, OnInit } from '@angular/core';
import {  AplicationService } from '../../../services/aplication.service';
import { NgForm } from '@angular/forms';
import { Aplication } from '../../../models/aplication';

@Component({
  selector: 'app-admin-applications',
  templateUrl: './admin-applications.component.html',
  styleUrls: ['./admin-applications.component.css'],
  providers: [AplicationService]
})
export class AdminApplicationsComponent implements OnInit {

  constructor(private aplicationService: AplicationService) { }

  ngOnInit() {
  this.getAplications();
  }

  addAplication(form: NgForm){
    if(form.value._id) {
      this.aplicationService.putAplication(form.value).subscribe(res =>{
        this.resetForm(form);
        this.getAplications();
      })
     } else{
        this.aplicationService.postAplication(form.value).subscribe(res =>{
          this.resetForm(form);
          this.getAplications();
        });
      }
    }
  
    getAplications(){
      this.aplicationService.getAll()
      .subscribe(res => {
        this.aplicationService.aplications = res as Aplication[];
        console.log(res);
      });
    }

    deleteAplication(_id: string){
      if(confirm('¡Estás Seguro de eliminar la aplicación?')){
        this.aplicationService.deleteAplication(_id).subscribe(res =>{
          this.getAplications();
        });
      }
    }

    resetForm(form?: NgForm){
      if (form){
        form.reset();
        this.aplicationService.selectedAp = new Aplication();
      }
    }
}
