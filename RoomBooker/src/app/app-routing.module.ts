import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: MapComponent, canActivate: [AuthGuard] },
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
