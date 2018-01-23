import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const MAIN_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      MAIN_ROUTES,
      { enableTracing: true}
    ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
