import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8000/registration';
const loginUrl = 'http://127.0.0.1:8000/login/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post(endpoint, userData);
  }

  logInUser(loginCreds): Observable<any> {
    return this.http.post(loginUrl, loginCreds);
  }

}
