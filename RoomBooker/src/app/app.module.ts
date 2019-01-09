import { AmazingTimePickerModule } from 'amazing-time-picker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthGuard } from './auth/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { DataService } from './services/data.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { MapComponent } from './map/map.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PopupComponent } from './popup/popup.component';

import { RegistrationComponent } from './registration/registration.component';
import { UserpageComponent } from './userpage/userpage.component';


// ngModule decorator
@NgModule({
  declarations: [ // holds the components
    AppComponent,
    HomepageComponent,
    LoginComponent,
    MapComponent,
    NavbarComponent,
    PagenotfoundComponent,
    PopupComponent,
    RegistrationComponent,
    UserpageComponent,
  ],
  imports: [ // holds the modules
    AmazingTimePickerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    PopupComponent,
  ],

  providers: [ // holds the services
    AuthGuard,
    DataService,
    MatDatepickerModule,
            ],
  bootstrap: [AppComponent] // specipies compontets to load first
})
export class AppModule { }
