import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8000';
let token;
let tokenKey;
let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'token ' + tokenKey

  })
};

@Injectable({ // decorator that allow depencencies injections
  providedIn: 'root'
})
export class BookingService {

  public httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {

  }

  private extractData(res: Response) {

    return res || { };
  }

  bookRoom(bookingData): Observable<any> {
    return this.http.post(baseUrl + '/booking', bookingData ).pipe(
      map(this.extractData));
  }

  getRooms(timeframe): Observable<any> {

    token = JSON.parse(localStorage.getItem('currentUser'));
    if (token == null) {
      this.router.navigate(['login']);
    } else {
      tokenKey = token['key'];
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'token ' + tokenKey

        })
      };
    }

    return this.http.get(baseUrl + '/booking?' + timeframe, httpOptions).pipe(
      map(this.extractData));
  }



  getUserBookings(id): Observable<any>  {
    return this.http.get(baseUrl + '/booking?emailID=' + id).pipe(
      map(this.extractData));
  }

  deleteBooking(bookingID): Observable<any>  {
    return this.http.delete(baseUrl + '/booking/cancel?bookingID=' + bookingID).pipe(
      map(this.extractData));
  }



}


