import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import { RatingModule } from 'ng-starrating';
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';
import { FileUploadModule } from 'ng2-file-upload';
import { CloudinarySettings } from './settings';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Components and services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicationsComponent } from './components/aplications/aplications.component';
import { AplicationDetailComponent } from './components/aplication-detail/aplication-detail.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidationService } from './services/validation.service';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommentComponent } from './components/comment/comment.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { AdminApplicationsComponent } from './components/admin-components/admin-applications/admin-applications.component';
import { AdminCommentsComponent } from './components/admin-components/admin-comments/admin-comments.component';
import { AdminEventsComponent } from './components/admin-components/admin-events/admin-events.component';
import { RatingComponent } from './components/rating/rating.component';
import { SlickModule} from 'ngx-slick';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AplicationsComponent,
    AplicationDetailComponent,
    NewsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    CategoriesComponent,
    CommentComponent,
    CategoryDetailComponent,
    DownloadsComponent,
    AdminApplicationsComponent,
    AdminCommentsComponent,
    AdminEventsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    RatingModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinary,CloudinarySettings),
    SlickModule.forRoot(),
    Ng2SearchPipeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [ValidationService, FlashMessagesService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
