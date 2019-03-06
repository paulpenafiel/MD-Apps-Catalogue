import { Component, OnInit } from '@angular/core';
import { PostNewService } from '../../../services/post-new.service';
import { NgForm } from '@angular/forms';
import {  PostNew } from '../../../models/Post';
import { ValidationService } from '../../../services/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css'],
  providers: [PostNewService]
})
export class AdminEventsComponent implements OnInit {

  newPost: any;
  newEvent: any;
  constructor(private postService: PostNewService,private validationService: ValidationService,private flashMessage: FlashMessagesService ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts()
    .subscribe(res => {
      this.postService.posts = res as PostNew[];
      console.log(res);
    });
  }

  deletePost(_id: string){
    if(confirm('¡Estás Seguro de eliminar la publicación?')){
      this.postService.deletePost(_id).subscribe(res =>{
        this.getPosts();
      });
    }
  }

  addNew(event: any){
    this.newPost={
      postType: 'Noticia',
      date: event.target.date.value,
      title: event.target.title.value,
      body: event.target.body.value,
      source: event.target.source.value
    };
    console.log(this.newPost);
    if (!this.validationService.newCompleteness(this.newPost)) {
      this.flashMessage.show('Por favor llenar todos los campos', { cssClass: 'alert-danger', timeout: 1500 });
      return false;
    }

    this.postService.registerPost(this.newPost).subscribe(res => {
      this.getPosts();
      event.target.reset();
    });
    this.flashMessage.show('Su Noticia ha sido guardada', { cssClass: 'alert-success', timeout: 1500 });
  }

  addEvent(event: any){
    this.newEvent={
      postType: 'Evento',
      date: event.target.dateE.value,
      title: event.target.titleE.value,
      body: event.target.bodyE.value,
      source: event.target.sourceE.value,
      Hour: event.target.HourE.value,
      price: event.target.priceE.value,
      place: event.target.placeE.value
    };
    console.log(this.newEvent);
    if (!this.validationService.newEventCompleteness(this.newEvent)) {
      this.flashMessage.show('Por favor llenar todos los campos', { cssClass: 'alert-danger', timeout: 1500 });
      return false;
    }

    this.postService.registerPost(this.newEvent).subscribe(res => {
      this.getPosts();
      event.target.reset();
    });
    this.flashMessage.show('Su Evento ha sido guardado', { cssClass: 'alert-success', timeout: 1500 });
  }
}
