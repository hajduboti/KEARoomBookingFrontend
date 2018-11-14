import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = '';
  password = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@stud.kea.dk')]],
    password: ['', Validators.required]
  });}

  ngOnInit() {
  }

  logIn(){
    console.log('loggend In')
  }
}
