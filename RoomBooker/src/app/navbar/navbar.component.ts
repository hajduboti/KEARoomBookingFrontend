import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  authenticated: boolean;
  constructor(private as: AuthService, private router:Router) {

   }
  ngOnInit() {
    this.as.currentUser.subscribe(userStatus => this.authenticated = userStatus)
 }

 logOut() {
  localStorage.clear();
  let status = this.as.isAuthenticated();
  this.as.changeLoggedStatus(status);
  this.router.navigate(['/login']);
}

}

