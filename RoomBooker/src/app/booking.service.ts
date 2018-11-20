import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:8000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  

  constructor(private http: HttpClient) {
  }

  
  getRooms(parameters): Observable<any> {
    return this.http.post("http://localhost:8000/booking", parameters);
  }



  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getCampus(): Observable<any> {
    return this.http.get("http://localhost:8000/campus/room/details").pipe(
      map(this.extractData));
  }

}
  