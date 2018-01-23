import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const ADMIN_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      ADMIN_ROUTES,
    ),
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
  ],
  exports: []
})
export class AdminRoutingModule { }
