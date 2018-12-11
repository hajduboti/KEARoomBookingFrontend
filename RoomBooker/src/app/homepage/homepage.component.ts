import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { BookingService } from '../booking.service';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(Date.now()+ 24192e5);
  date = new Date();
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
    ){ 
    this.dateForm = fb.group({
      date: ['', Validators.required],
      fromtime: ['', Validators.required],
      totime: ['', Validators.required]
    })
  }

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

  isTimeSelected(){
    var fromtime = (<HTMLInputElement>document.getElementById("fromtime")).value;
    var totime = (<HTMLInputElement>document.getElementById("totime")).value;
    
    if(fromtime || totime == null){
      console.log('a');
      return false;
    }else{
      console.log('b');
      return true;
    }
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
