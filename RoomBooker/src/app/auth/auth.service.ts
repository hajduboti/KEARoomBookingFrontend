import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
  currentUser = this.isLoggedIn.asObservable();


  constructor() { }

  changeLoggedStatus(userStatus: boolean){
    this.isLoggedIn.next(userStatus);
  }

  public isAuthenticated(){
    if (localStorage.getItem('currentUser') == null){
      return false;
    }else{
      return true;
    }
  }


}
