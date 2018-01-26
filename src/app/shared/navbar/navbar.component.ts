import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  isLoggedIn: Observable<boolean>;
  constructor(
    private router: Router,
    private authSvc: AuthService
  ) {
    this.isLoggedIn = this.authSvc.isLoggedIn();
  }

  logout() {
    this.authSvc.logout();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {}
}
