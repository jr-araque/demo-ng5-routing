import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authSvc: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authSvc.isLoggedIn();
  }
}
