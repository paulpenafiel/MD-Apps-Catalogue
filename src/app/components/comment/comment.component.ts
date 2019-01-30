import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() data: String;
  constructor() { 
  }

  ngOnInit() {
    console.log(this.data);
  }

}
