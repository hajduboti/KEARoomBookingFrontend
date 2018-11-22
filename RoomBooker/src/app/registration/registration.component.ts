import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { last } from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register;
  registerForm: FormGroup;
  submitted = false;
  firstName = '';
  lastName = '';
  email = '';
  username;
  password = '';

  constructor(private fb: FormBuilder, private rs: RegistrationService) {
    this.registerForm = fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@stud.kea.dk')])],
    password: ['', Validators.required]
  });}

  ngOnInit() {
 
     }

  registerUser(){
    this.register= {
      "email":this.registerForm.controls["email"].value,
      "password1": this.registerForm.controls["password"].value,
      "password2": this.registerForm.controls["password"].value,
      "first_name": this.registerForm.controls["firstName"].value,
      "last_name": this.registerForm.controls["lastName"].value,
      
  }
    console.log(this.register);
    this.rs.registerUser(this.register).subscribe(  
      response => {
        console.log('yay');
      },
      error => console.log("error", error)
    );
  }

}
