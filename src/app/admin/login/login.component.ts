import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  constructor(
    private router: Router,
    private authSvc: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log('doing login...');
    this.authSvc.updateUserStatus({
        loggedIn: true,
        username: this.loginForm.get('email').value
      });
    this.authSvc.userStatus.subscribe( (data) => {
      if (data.isLoggedIn === true) this.router.navigateByUrl('/admin/dashboard'):
    });
  }

  logout() {
    console.log('doing logout...');
    this.authSvc.updateUserStatus({loggedIn: false});
  }

}
