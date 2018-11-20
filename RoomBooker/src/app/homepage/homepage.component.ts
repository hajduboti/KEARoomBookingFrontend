import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { BookingService } from '../booking.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(Date.now()+ 24192e5);
  date = new Date();
  campuses:any = [];

  constructor(private atp: AmazingTimePickerService, public bs:BookingService) { }

  ngOnInit() {
    //this.getCampuses();

  }

  getBookingTimes(){
    var fromtime = (<HTMLInputElement>document.getElementById("fromtime")).value;
    var totime = (<HTMLInputElement>document.getElementById("totime")).value;
    var mydate = this.date;
    var m = new Date(mydate).getMonth() + 1;
    var workingDate = mydate.getFullYear() + "-" + m + "-" + mydate.getDate();
    return("startDate=" + workingDate + " " + fromtime + "&endDate=" + workingDate + " " + totime);
  }

  
  

}
