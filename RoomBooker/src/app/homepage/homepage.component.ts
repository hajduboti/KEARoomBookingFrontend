import { Component, OnInit } from '@angular/core';
import { CampusService } from '../campus.service';
import { AmazingTimePickerService } from 'amazing-time-picker';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(Date.now()+ 24192e5);
  

  campuses:any = [];

  constructor(private atp: AmazingTimePickerService, public campus:CampusService) { }

  ngOnInit() {
    this.getCampuses();

  }

  getFromTime(){
    var boundary = (<HTMLInputElement>document.getElementById("fromtime")).value;
    (<HTMLInputElement>document.getElementById("fromtime")).attributes["start"] = boundary;
    console.log((<HTMLInputElement>document.getElementById("fromtime")).attributes["start"]);
  }



  getCampuses() {
    this.campuses = [];
    this.campus.getCampuses().subscribe((data: {}) => {
      console.log(data);
      this.campuses = data;
    });
  }

  

}
