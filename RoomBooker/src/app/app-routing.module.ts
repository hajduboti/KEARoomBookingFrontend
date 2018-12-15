import { AuthGuard } from './auth/auth.guard';
import { DateselectGuard } from './auth/dateselect.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: MapComponent, canActivate: [AuthGuard, DateselectGuard] },
  { path: '**', component: PagenotfoundComponent }



];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
