import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AplicationsComponent } from './components/aplications/aplications.component';
import { AplicationDetailComponent } from './components/aplication-detail/aplication-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { NewsComponent } from './components/news/news.component';
import { AdminApplicationsComponent } from './components/admin-components/admin-applications/admin-applications.component';
import { AdminCommentsComponent } from './components/admin-components/admin-comments/admin-comments.component';

const routes: Routes = [
  {path:'', component: AplicationsComponent},
  {path: 'aplications', component: AplicationsComponent},
  {path: 'detail/:id', component: AplicationDetailComponent},
  {path: 'cat/:cat', component: CategoryDetailComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'news', component: NewsComponent},
  {path: 'adminApp', component: AdminApplicationsComponent},
  {path: 'adminComm', component: AdminCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
