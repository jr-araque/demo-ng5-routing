import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Main Components
import { AppComponent } from './app.component';
// Shared Components
import { NavbarComponent } from './shared/navbar/navbar.component';
// Sub Modules
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
