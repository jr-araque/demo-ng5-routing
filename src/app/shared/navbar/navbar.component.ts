import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  username: string;
  loggedIn: boolean;
  userStateSubscription: Subscription;
  constructor(
    private authSvc: AuthService
  ) { }

  ngOnInit() {
    this.userStateSubscription = this.authSvc.userStatus.subscribe( (data) => {
      this.loggedIn = data.loggedIn;
      this.username = data.username;
    });
  }

  ngOnDestroy(): void {
    this.userStateSubscription.unsubscribe();
  }
}
