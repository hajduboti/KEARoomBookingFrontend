import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class DateselectGuard implements CanActivate {
  constructor(private router: Router, private ds: DataService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.ds.getStartDate() != null) {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate([''], { queryParams: { returnUrl: state.url }});
    }
    
}
