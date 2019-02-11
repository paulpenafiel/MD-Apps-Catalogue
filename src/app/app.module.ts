import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';


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
    DownloadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
  ],
  providers: [ValidationService, FlashMessagesService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
