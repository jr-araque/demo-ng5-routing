import {Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl(
    '',
    [
      Validators.required,
      Validators.email,
    ]);
  password = new FormControl(
    '',
    [
      Validators.required,
    ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  statusSubs: Subscription;
  constructor(
    private router: Router,
    private authSvc: AuthService) { }

  login() {
    this.authSvc.login('araque');
    this.router.navigateByUrl('');
  }

}
