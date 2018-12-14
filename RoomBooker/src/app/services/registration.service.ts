import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const regUrl = 'http://localhost:8000/registration';
const loginUrl = 'http://127.0.0.1:8000/login/';

@Injectable({ // decorator that allow depencencies injections
  providedIn: 'root'
})
export class RegistrationService {

  // http options used for making API calls
 private httpOptions: any;

 // the actual JWT token
 public token: string;

 // error messages received from the login attempt
 public errors: any = [];

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  registerUser(userData): Observable<any> {
    return this.http.post(regUrl, userData);
  }

  // private updateData(token) {
  //   this.token = token;
  //   this.errors = [];
  //   console.log('hey' + token)
  // }

  logInUser(loginCreds): Observable<any> {
    return this.http.post(loginUrl, loginCreds);
  }

}



// changed const name from endpoint to regUrl
