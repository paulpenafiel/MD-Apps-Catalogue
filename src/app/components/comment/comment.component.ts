import { Component, OnInit, Input} from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() dataApp: string;
  @Input() dataUser: string;

  comments: Comment[]

  constructor(private commentService: CommentService) { 
  }

  ngOnInit() {
    
    this.validate();
  }

  getCommentsByApp(){
    this.commentService.getCommentsByApp(this.dataApp)
    .subscribe( res =>{
      this.comments= res as Comment[]; 
      console.log(res);
    });
  }

  getCommentsByUser(){
    this.commentService.getCommentsByUser(this.dataUser)
    .subscribe( res =>{
      this.comments= res as Comment[]; 
      console.log(res);
    });
  }

  validate(){
    var flag = this.dataApp.localeCompare("");
    if(flag==1){
      this.getCommentsByApp();
    } else{
      this.getCommentsByUser();
    }
  }
}
