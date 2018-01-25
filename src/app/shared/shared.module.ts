import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BatmanComponent } from './batman/batman.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    BatmanComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  exports: [
    BatmanComponent,
    NavbarComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }
