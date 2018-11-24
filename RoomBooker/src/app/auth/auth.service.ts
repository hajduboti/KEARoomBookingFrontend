import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getCurrentUser(): string {
    return localStorage.getItem('currentUser');
  }


}
