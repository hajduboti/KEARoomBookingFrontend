import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const baseUrl ='http://localhost:8000';
let tokenKey = JSON.parse(localStorage.getItem('currentUser'));
let token = tokenKey['key'];
const httpOptions = new RequestOptions({
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'token ' + token
  })
});

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAllRooms(): Observable<any> {
    console.log(token);
    return this.http.get(baseUrl + '/booking?', httpOptions);
  }

  getRooms(timeframe): Observable<any> {
    console.log(baseUrl + '/booking_' + timeframe)
    return this.http.get(baseUrl + '/booking_' + timeframe).pipe(
      map(this.extractData));
  }

  getCampus(): Observable<any> {
    return this.http.get(baseUrl + "/campus/room/details").pipe(
      map(this.extractData));
  }

}
