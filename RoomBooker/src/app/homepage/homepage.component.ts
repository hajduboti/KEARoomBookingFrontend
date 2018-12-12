import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { BookingService } from '../booking.service';
import { DataService } from '../data.service';




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
  nonAvailableRoom = [];


  constructor(
    private atp: AmazingTimePickerService,
    public bs:BookingService,
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }


  getAllRooms(){
      this.bs.getAllRooms().subscribe(
        response => {
          console.log('all rooms ' + response);
        },
        error => console.log('all rooms ' + 'error')
      );
  }
  createRoomList(response){

  }


  getBookingTimes(){
    var val;
    var fromtime = (<HTMLInputElement>document.getElementById("fromtime")).value;
    var totime = (<HTMLInputElement>document.getElementById("totime")).value;
    var mydate = this.date;
    var m = new Date(mydate).getMonth() + 1;
    var workingDate = mydate.getFullYear() + "-" + m + "-" + mydate.getDate();
    var res = encodeURI("startDate=" + workingDate + " " + fromtime + "&endDate=" + workingDate + " " + totime);
    this.bs.getRooms(res).subscribe(
      response => {
        for(val of response){
          this.nonAvailableRoom.push(val.roomID)
        }
        this.dataService.setdata(this.nonAvailableRoom);
      },
      error => console.log('error')
    );
    setTimeout(() =>
    {
      this.router.navigate(['/booking']);
    },
    200);

  }

  logOut(){
    localStorage.clear();
  }



}
