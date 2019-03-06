import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostNew } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostNewService {

  readonly postNewUrl= 'http://localhost:3000/posts';
  posts: PostNew[];
  selectePost: PostNew;

  constructor(private http: HttpClient) { }

  registerPost(newPost: PostNew){
    return this.http.post(this.postNewUrl+'/newPost', newPost);
  }

  getPosts() {
    return this.http.get(this.postNewUrl);
  }

  deletePost(_id: String){
    return this.http.delete(this.postNewUrl+`/${_id}`);
  }
}
