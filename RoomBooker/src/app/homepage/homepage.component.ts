import { ActivatedRoute, Params, Router } from '@angular/router';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { BookingService } from '../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(Date.now()+ 24192e5);
  dateForm: FormGroup;
  fromtime = '';
  totime ='';
  campuses:any = [];
  nonAvailableRoom = [];


  constructor(
    private atp: AmazingTimePickerService,
    public bs:BookingService,
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
    ) {
    this.dateForm = fb.group({
      date: ['', Validators.required],
      fromtime: ['', Validators.required],
      totime: ['', Validators.required]
    });
  }

  ngOnInit() {

  }


  isTimeSelected(){
    const fromtime = (<HTMLInputElement>document.getElementById("fromtime")).value;
    const totime = (<HTMLInputElement>document.getElementById("totime")).value;

    if (fromtime || totime == null){
      return false;
    } else {
      return true;
    }
  }



  getBookingTimes(){
    let val;
    let fromtime = (<HTMLInputElement>document.getElementById("fromtime")).value;
    let totime = (<HTMLInputElement>document.getElementById("totime")).value;
    let mydate =  new Date((<HTMLInputElement>document.getElementById("date")).value);
    let m = new Date(mydate).getMonth() + 1;
    let workingDate = mydate.getFullYear() + "-" + m + "-" + mydate.getDate();
    let res = encodeURI("startDate=" + workingDate + " " + fromtime + "&endDate=" + workingDate + " " + totime);
    this.dataService.setDates( workingDate + " " + fromtime, workingDate + " " + totime);
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
