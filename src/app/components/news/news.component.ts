import { Component, OnInit } from '@angular/core';
import { PostNewService } from '../../services/post-new.service';
import { PostNew } from '../../models/Post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  posts: PostNew[];
  constructor(private postnewService: PostNewService) { }

  ngOnInit() {
  this.getPosts();
  }

  getPosts(){
    this.postnewService.getPosts()
    .subscribe(res =>{
      this.posts = res as PostNew[];
      console.log(res);
    });
  }
}
