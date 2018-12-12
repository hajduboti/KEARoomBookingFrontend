import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  authenticated:boolean;
  constructor(private as:AuthService) {
  
   }
  ngOnInit() {
    this.as.currentUser.subscribe(userStatus => this.authenticated = userStatus)
 }

 logOut(){
  localStorage.clear();
  let status = this.isAuthenticated();
  this.as.changeLoggedStatus(status);
}
public isAuthenticated(){
  if (localStorage.getItem('currentUser') == null){
    return false;
  }else{
    return true;
  }
}
  

}

