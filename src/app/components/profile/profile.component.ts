import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders, FileItem} from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public uploader: FileUploader;
  user: Object;
  imgPath: string;
  constructor(private authService: AuthenticationService, private router:Router, private cloudinary: Cloudinary) { }

  ngOnInit() {
    this.imgPath=this.authService.getImgPath();
    //
    this.authService.getUserProfile()
    .subscribe(profile => {
      console.log(profile);
      this.user = profile['user'];
      
    },
    err => {
      console.log(err);
      return false;
    });

    
    //
    this.sendImageCloudinary();
  }

  SaveNewImage(_id: string){
    if(confirm('¿Estás seguro de bloquear el comentario?')){
      const object={
        imgPath: this.imgPath
      }
      this.authService.putImgPath(_id, object)
      .subscribe(res =>{
        console.log('exito')
      });
    }
  }

  sendImageCloudinary(){
    const uploaderOptions: FileUploaderOptions ={
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/image/upload`,
      autoUpload: false,
      isHTML5:true,
      removeAfterUpload: true,
      headers: [{
        name: 'X-Requested-With',
        value: 'XMLHttpRequest'
      }]
    };

    const upsertResponse = fileItem =>{
      if(fileItem.status !== 200){
        console.log('fallo');
        console.log(fileItem);
        return false;
      }
      console.log(fileItem);
      console.log(fileItem.data.url);
      // this.listaImagenes.push(fileItem.data.url);
      this.imgPath=fileItem.data.url;
      console.log('smsmsmsmsm'+this.imgPath);
      //
      this.SaveNewImage(this.user['_id']);
    }

    this.uploader = new FileUploader(uploaderOptions);
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData) : any =>{
      form.append( 'upload_preset', this.cloudinary.config().upload_preset);
      fileItem.withCredentials =false;
      return(form);
    }

    this.uploader.onCompleteItem =(item: any, response: string, status: number, headers: ParsedResponseHeaders) => upsertResponse(
      {
        file: item.file, status,
        data: JSON.parse(response)
      }
    );

    
  }
}
