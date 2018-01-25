import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Admin Routing Module
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
  ],
  exports: []
})
export class AdminModule { }
