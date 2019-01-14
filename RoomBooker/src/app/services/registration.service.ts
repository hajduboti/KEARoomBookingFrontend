import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const regUrl = 'https://3.120.27.147/registration';
const loginUrl = 'https://3.120.27.147/login/';

@Injectable({ // decorator that allow depencencies injections
  providedIn: 'root'
})
export class RegistrationService {

  // http options used for making API calls
 private httpOptions: any;

 // the actual token
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

  logInUser(loginCreds): Observable<any> {
    return this.http.post(loginUrl, loginCreds);
  }

}



// changed const name from endpoint to regUrl
