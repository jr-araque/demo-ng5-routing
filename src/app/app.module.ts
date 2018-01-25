import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Main Components
import { AppComponent } from './app.component';
// Sub Modules
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import {AuthService} from './auth/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
