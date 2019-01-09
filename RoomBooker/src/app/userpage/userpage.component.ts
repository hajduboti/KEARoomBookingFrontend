import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';


export interface PeriodicElement {
  roomID: string;
  from: string;
  to: string;
}

const DATA = [


];


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  mydata = [];

  displayedColumns: string[] = ['roomID', 'date', 'startDate', 'endDate', 'delete'];
  dataSource = DATA;

  userStatus: boolean;
  user;
  id;

  constructor(private bs: BookingService, private router: Router) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.id = user['user'];
    console.log(this.id);
    this.bs.getUserBookings(this.id).subscribe(
      response => {
        console.log(response);
        response.forEach(element => {
          this.mydata.push(element);
        });
        this.setData(this.mydata);
        this.dataSource = this.mydata;
      },
      error => console.log('error') // maybe also popup with wrong credentials?
    );
  }

  setData(data) {
    data.forEach(element => {
      const from = element.startDate;
      const to = element.endDate;
      const newDate = from.substring(0, 10);
      const newFrom = from.substring(11, 17);
      const newTo = to.substring(11, 17);
      element.date = newDate;
      element.startDate = newFrom;
      element.endDate = newTo;
    });
  }

  deleteBooking(bookingID) {
    this.bs.deleteBooking(bookingID).subscribe(
      response => {
        console.log(response);
      },
      error => console.log('error') // maybe also popup with wrong credentials?
    );
  }

}
