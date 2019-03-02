import { Component, OnInit, Input } from '@angular/core';
import { Aplication } from '../../models/aplication';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { AplicationService } from '../../services/aplication.service';
import {AuthenticationService} from '../../services/authentication.service';
import { DownloadService } from '../../services/download.service';



@Component({
  selector: 'app-aplication-detail',
  templateUrl: './aplication-detail.component.html',
  styleUrls: ['./aplication-detail.component.css']
})
export class AplicationDetailComponent implements OnInit {

  @Input() aplication: Aplication;
  newDownload: any;
  idUser='';
  user: User;
  slideConfig = {
    "slidesToScroll": 1,
    "slidesToShow":1,
    "variableWidth": true, 
    "dots":true, 
    "infinite":true, 
    "centerMode":true,
    "focusOnSelect":true};

  constructor(private route: ActivatedRoute, 
    private aplicationService: AplicationService,
    private location: Location,
    private authService: AuthenticationService,
    private downloadService: DownloadService,
    private router: Router) {}

  ngOnInit() {
    this.getAplicaionbyId();
    this.authService.getUserProfile()
    .subscribe(profile => {
      console.log(profile);
      this.user = profile['user'];
      this.idUser=this.user._id;
    },
    err => {
      console.log(err);
      return false;
    });
    
  }

  getAplicaionbyId(){
    const id = this.route.snapshot.paramMap.get('id');
    this.aplicationService.getAplicationByID(id)
    .subscribe( res =>{
      this.aplication= res as Aplication; 
      console.log(res);
    });
  }

  registerDownload(){
    this.newDownload={
      date: Date.now,
      idUser: this.idUser,
      idAplication: this.aplication._id,
      nameAplication: this.aplication.name,
      categoryAplication: this.aplication.category,
      descAplication: this.aplication.category,
      rating: this.aplication.rating,
      imgAplication: this.aplication.imgPath
    }
    this.downloadService.registerDownload(this.newDownload).subscribe(res =>{
      
    });
  }  

  //Carousel Event Trigger
  afterChange(e) {
    console.log('afterChange');
  }

  
  isforProfesionals(){
    if(this.aplication.category.includes('profesionales')){
      return true;
    }else{
      return false;
    }
  }

  confirmPro(){
    if(this.authService.isPro()){
      this.registerDownload();
      window.location.href = this.aplication.accessPath;
    }else{
      alert('Usted no es ningun terapista');
    }
  }
}
