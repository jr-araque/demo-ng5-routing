import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from '../auth/auth.guard';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    canActivate: [],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [

    RouterModule.forChild(
      ADMIN_ROUTES,
    ),
    BrowserModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
  ],
  exports: []
})
export class AdminRoutingModule { }
