import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BookingService } from '../booking.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  nonAvailableRoom = [];
  bookingData;
  startDate;
  endDate;
  roomID;
  emailID;

  constructor(public dataService: DataService, private bs: BookingService) {
    (<any>window).right = this.right.bind(this);
    (<any>window).left = this.left.bind(this);

  }


  ngOnInit() {
    this.nonAvailableRoom = this.dataService.getdata();
    for(let i in this.nonAvailableRoom){
      var boi = document.getElementById(this.nonAvailableRoom[i]);
      boi.style.fill="#cecece";
    }
  }

  bookRoom(){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.emailID = user['user'];
    this.bookingData= {
      "startDate": "2018-12-20 15:00",
      "endDate": "2018-12-20 16:00",
      "roomID": "A210",
      "emailID": 16
    }
    console.log(this.bookingData);
    this.bs.bookRoom(this.bookingData).subscribe(
      response => {
        console.log('yay');
      },
      error => console.log('error', error)
    );
  }


  getEmailID(){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.emailID = user['user'];
  
  }


  right(){
    var i = document.getElementById("Layer_1");
    var y = document.getElementById("Layer_2");
    i.style.display = 'none';
    y.style.display = 'inline';
  }
  left(){
    var i = document.getElementById("Layer_1");
    var y = document.getElementById("Layer_2");
    y.style.display = 'none';
    i.style.display = 'inline';
  }
  myFunction(){
    }
}
