import { Component, OnInit, Input } from '@angular/core';
import { Aplication } from '../../models/aplication';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AplicationService } from '../../services/aplication.service';

@Component({
  selector: 'app-aplication-detail',
  templateUrl: './aplication-detail.component.html',
  styleUrls: ['./aplication-detail.component.css']
})
export class AplicationDetailComponent implements OnInit {

  @Input() aplication: Aplication;
  constructor(private route: ActivatedRoute, 
    private aplicationService: AplicationService,
    private location: Location) { }

  ngOnInit() {
    this.getAplicaionbyId();
  }

  getAplicaionbyId(){
    const id = this.route.snapshot.paramMap.get('id');
    this.aplicationService.getAplicationByID(id)
    .subscribe( res =>{
      this.aplication= res as Aplication; 
      console.log(res);
    });
  }

}
