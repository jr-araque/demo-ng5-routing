import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BatmanComponent } from './batman/batman.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { RandomPipe } from './random.pipe';

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
    RandomPipe,
  ],
  exports: [
    BatmanComponent,
    NavbarComponent,
    NotFoundComponent,
    RandomPipe,
  ]
})
export class SharedModule { }
