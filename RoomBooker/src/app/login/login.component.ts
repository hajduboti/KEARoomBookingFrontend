import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userStatus:boolean;
  user;
  loginForm: FormGroup;
  email = '';
  password = '';
  authenticated: boolean;

  constructor(private fb: FormBuilder, private rs: RegistrationService, private router:Router, private as: AuthService) {
    this.loginForm = fb.group({
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@stud.kea.dk')])],
    password: ['', Validators.required]
  });}

  ngOnInit() {
    this.as.currentUser.subscribe(userStatus => this.userStatus = userStatus)
  }

  logIn(){
    this.user= {
      "email":this.loginForm.controls["email"].value,
      "password": this.loginForm.controls["password"].value,
  }
    console.log(this.user);
    this.rs.logInUser(this.user).subscribe(
      response => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        let status = this.isAuthenticated();
        this.as.changeLoggedStatus(status);
        this.router.navigate(['/']);
      },
      error => console.log('error')
    );
  }

  public isAuthenticated(){
    if (localStorage.getItem('currentUser') == null){
      return false;
    }else{
      return true;
    }
  }
}
