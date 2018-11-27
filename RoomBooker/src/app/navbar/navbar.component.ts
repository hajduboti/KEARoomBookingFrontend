import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show;
  constructor(private as:AuthService) { }
  ngOnInit() {
    let tokenKey = JSON.parse(localStorage.getItem('currentUser'));

    try{
        let token = tokenKey['key'];
      }catch(e){
        let token = undefined;
      }
      if(token !== undefined){
      console.log('not showing');
      console.log(token);
      show = false;

    }else{
      console.log('showing');
      show = true;
    }
  }


}
