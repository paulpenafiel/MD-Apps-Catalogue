import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  readonly commentsUrl = 'http://localhost:3000/comments';
  comments: Comment[];

  constructor(private http:HttpClient) { }

  getCommentsByApp(idApp: string) {
    return this.http.get(this.commentsUrl+'/'+idApp);
  }

  getCommentsByUser(idUser: string) {
    return this.http.get(this.commentsUrl+'/byUser/'+idUser);
  }
}
