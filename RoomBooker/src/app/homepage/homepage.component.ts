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
  getAllRooms(){
      this.bs.getAllRooms().subscribe(
        response => {
          console.log(response);
        },
        error => console.log('error')
      );
  }
  createRoomList(response){

  }

  getBookingTimes(){
    var val;
    var nonAvailableRoom = [];
    var fromtime = (<HTMLInputElement>document.getElementById("fromtime")).value;
    var totime = (<HTMLInputElement>document.getElementById("totime")).value;
    var mydate = this.date;
    var m = new Date(mydate).getMonth() + 1;
    var workingDate = mydate.getFullYear() + "-" + m + "-" + mydate.getDate();
    var res = encodeURI("startDate=" + workingDate + " " + fromtime + "&endDate=" + workingDate + " " + totime);
    this.bs.getRooms(res).subscribe(
      response => {
        for(val of response){
          // console.log(val.roomID)
          nonAvailableRoom.push(val.roomID)
        }
        console.log(nonAvailableRoom)
      },
      error => console.log('error')
    );

  }

  logOut(){
    localStorage.clear();
  }



}
