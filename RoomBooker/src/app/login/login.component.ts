import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  loginForm: FormGroup;
  email = '';
  password = '';

  constructor(private fb: FormBuilder, private rs: RegistrationService, private router:Router) {
    this.loginForm = fb.group({
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@stud.kea.dk')])],
    password: ['', Validators.required]
  });}

  ngOnInit() {
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
        this.router.navigate(['/']);

      },
      error => console.log('error')
    );
  }
}
