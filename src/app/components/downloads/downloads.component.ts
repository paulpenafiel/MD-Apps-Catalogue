import { Component, OnInit, Input } from '@angular/core';
import { DownloadService } from '../../services/download.service';
import { Download } from '../../models/download';
import { DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  @Input() dataTarget: string;
  @Input() dataUser: string;
  @Input() dataApp: string;

  downloads: Download[];  
  downloadsNumber : number;

  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
    this.validate();
    
  }

  getDownloadsbyUser(){
    this.downloadService.getDownloadsByUser(this.dataUser).subscribe(res =>{
      this.downloads = res as Download[];
      console.log(res);
    });
  }

  getDownloadsNumber(){
    this.downloadService.getDownloadsNumberByApp(this.dataApp).subscribe( res =>{
      this.downloadsNumber = res['number'];
      console.log(this.downloadsNumber);
    });
  }

  validate(){
    var flag = this.dataApp.localeCompare("");
    if(flag==1){
      this.getDownloadsNumber();
    } else{
      this.getDownloadsbyUser();
    }
  }
}
