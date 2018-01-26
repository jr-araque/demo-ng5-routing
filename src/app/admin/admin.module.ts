import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Admin Routing Module
import { AdminRoutingModule } from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    LoginComponent,
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ],
  providers: [

  ]
})
export class AdminModule { }
