import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import {NgForm} from '@angular/forms';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.css'],
  providers: [CommentService]
})
export class AdminCommentsComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getAllComments();
  }

  getAllComments(){
    this.commentService.getAllComments()
    .subscribe(res =>{
      this.commentService.comments = res as Comment[];
      console.log(res);
    });
  }

  banComment(_id: string){
    if(confirm('¿Estás seguro de bloquear el comentario?')){
      this.commentService.putComment(_id)
      .subscribe(res =>{
        this.getAllComments();
      });
    }
  }

  allowComment(_id: string){
    if(confirm('¿Estás seguro de permitir el comentario?')){
      this.commentService.allowComment(_id)
      .subscribe(res =>{
        this.getAllComments();
      });
    }
  }

}
