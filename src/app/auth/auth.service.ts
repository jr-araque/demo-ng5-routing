import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private userStatusSource = new Subject<any>();
  isLoggedIn = false;
  userStatus = this.userStatusSource.asObservable();

  updateUserStatus(data) {
    this.isLoggedIn = data.loggedIn;
    this.userStatusSource.next(data);
  }
}
