import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
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
    return this.http.post(baseUrl + '/booking', bookingData );
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

  // getAllRooms(): Observable<any> { // useless
  //   token = JSON.parse(localStorage.getItem('currentUser'));
  //   if (token == null) {
  //     this.router.navigate(['login']);

  //   } else {
  //     tokenKey = token['key'];
  //   }
  //   return this.http.get(baseUrl + '/booking?', this.httpOptions);
  // }

  // getCampus(): Observable<any> {
  //   return this.http.get(baseUrl + "/campus/room/details").pipe(
  //     map(this.extractData));

  //   }



}


