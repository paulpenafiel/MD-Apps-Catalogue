import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  readonly commentsUrl = 'http://localhost:3000/comments';
  comments: Comment[];


  constructor(private http: HttpClient) { }

  getAllComments(){
    return this.http.get(this.commentsUrl);
  }
  getCommentsByApp(idApp: string) {
    return this.http.get(this.commentsUrl + '/' + idApp);
  }

  getCommentsByUser(idUser: string) {
    return this.http.get(this.commentsUrl + '/byUser/' + idUser);
  }

  createComment(newComment: Comment) {
    return this.http.post(this.commentsUrl + '/newComment', newComment);
  }

  putComment(id: string){
    return this.http.put(this.commentsUrl+'/ban/'+id,JSON.stringify({text:''}));
  }

  addReply(id: string, reply:Object){
    return this.http.put(this.commentsUrl+'/reply/'+id, reply);
  }
}
