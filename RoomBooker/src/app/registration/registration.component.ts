import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  password = '';
  allert = 'missing field';

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@stud.kea.dk')]],
    password: ['', Validators.required]
  });}

  ngOnInit() {

  }

  register(){
    console.log('Registered')
  }

}
