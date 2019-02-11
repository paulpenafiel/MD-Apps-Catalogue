import { Component, OnInit, Input} from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';
import { AuthenticationService } from '../../services/authentication.service';
//nuevo
import { User } from '../../models/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() dataApp: string;
  @Input() dataUser: string;
  @Input() dataTarget: string;

  user: User;
  comments: Comment[]
  newComment: any;
  body='';

  constructor(private commentService: CommentService, private authService: AuthenticationService) { 
  }

  ngOnInit() {
    this.authService.getUserProfile()
    .subscribe(profile => {
      console.log(profile);
      this.user = profile['user'];
    },
    err => {
      console.log(err);
      return false;
    });

    this.validate();
  }

   addComment() {
       this.newComment={
        date: Date.now,
        body: this.body,
        appId: this.dataApp,
        userId: this.user._id,
        userName: this.user.name,
        imgPath: this.user.imgPath
      }

      this.commentService.createComment(this.newComment).subscribe(res => {
        //this.resetForm(form);
        //M.toast({ html: 'Saved Successfuly' });
        this.validate();
      }); 
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
