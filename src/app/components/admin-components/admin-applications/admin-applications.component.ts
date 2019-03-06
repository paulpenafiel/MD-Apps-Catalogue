import { Component, OnInit } from '@angular/core';
import { AplicationService } from '../../../services/aplication.service';
import { NgForm } from '@angular/forms';
import { Aplication } from '../../../models/aplication';
import { ValidationService } from '../../../services/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-admin-applications',
  templateUrl: './admin-applications.component.html',
  styleUrls: ['./admin-applications.component.css'],
  providers: [AplicationService]
})
export class AdminApplicationsComponent implements OnInit {

  newAplication: any;
  constructor(private aplicationService: AplicationService, private validationService: ValidationService,private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.getAplications();
  }

  addAplication(event: any) {
    this.newAplication = {
      name: event.target.name.value,
      category: event.target.category.value,
      description: event.target.description.value,
      appType: event.target.appType.value,
      imgPath: event.target.imgPath.value,
      galery: [
        { galpath: event.target.imgA.value },
        { galpath: event.target.imgB.value },
        { galpath: event.target.imgC.value }
      ],
      opSystem: event.target.opSystem.value,
      register: event.target.register.value,
      organization: event.target.organization.value,
      developer: event.target.developer.value,
      accessPath: event.target.accessPath.value,
      lastUpdate: event.target.lastUpdate.value,
      currentVersion: event.target.currentVersion.value,
      internetConnection: event.target.internetConnection.value,
      keywords: event.target.keywords.value
    };
    console.log(this.newAplication);
    if (!this.validationService.aplicationCompleteness(this.newAplication)) {
      this.flashMessage.show('Por favor llenar todos los campos', { cssClass: 'alert-danger', timeout: 1500 });
      return false;
    }

    this.aplicationService.postAplication(this.newAplication).subscribe(res => {
      //  this.resetForm(form);
      
      this.getAplications();
      event.target.reset();
    });
    // console.log(this.newAplication);
    
    this.flashMessage.show('Su aplicación ha sido guardada', { cssClass: 'alert-success', timeout: 1500 });
    // this.resetForm(form);
  }

  getAplications() {
    this.aplicationService.getAll()
      .subscribe(res => {
        this.aplicationService.aplications = res as Aplication[];
        console.log(res);
      });
  }

  deleteAplication(_id: string) {
    if (confirm('¡Estás Seguro de eliminar la aplicación?')) {
      this.aplicationService.deleteAplication(_id).subscribe(res => {
        this.getAplications();
      });
    }
  }
}
