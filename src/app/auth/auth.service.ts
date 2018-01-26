import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.userSet());

  userSet(): boolean {
    return !!localStorage.getItem('username');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable().share();
  }

  login(username): void {
    // Here you should have some kind of validation
    localStorage.setItem('username', username);
    this.isLoginSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('username');
    this.isLoginSubject.next(false);
  }
}
