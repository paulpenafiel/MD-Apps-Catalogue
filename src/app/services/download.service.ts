import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Download } from '../models/download';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  readonly downloadUrl= 'http://localhost:3000/download';
  downloads: Download[];

  constructor(private http: HttpClient) { }

  getDownloadsNumberByApp(idApp: string){
    return this.http.get(this.downloadUrl+'/'+idApp);
  }

  getDownloadsByUser(idUser: string){
    return this.http.get(this.downloadUrl+'/byUser/'+idUser);
  }

  registerDownload(newDownload: Download){
    return this.http.post(this.downloadUrl+'/newDownload', newDownload);
  }
}
