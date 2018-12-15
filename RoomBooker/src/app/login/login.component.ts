import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userStatus: boolean;
  user;
  loginForm: FormGroup;
  email = '';
  password = '';
  authenticated: boolean;

  constructor(private fb: FormBuilder, private rs: RegistrationService, private router:Router, private as: AuthService) {
    this.loginForm = fb.group({
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@stud.kea.dk')])],
    password: ['', Validators.required]
  }); }

  ngOnInit() {
    this.as.currentUser.subscribe(userStatus => this.userStatus = userStatus); // why?
  }

  logIn() {
    this.user = {
      'email': this.loginForm.controls['email'].value,
      'password': this.loginForm.controls['password'].value,
  };
    this.rs.logInUser(this.user).subscribe(
      response => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        // let status = this.isAuthenticated();
        const status = this.as.isAuthenticated();
        this.as.changeLoggedStatus(status);
        this.router.navigate(['/']);
      },
      error => console.log('error') // maybe also popup with wrong credentials?
    );
  }

}
