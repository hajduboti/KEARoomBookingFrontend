import { Component, OnInit } from '@angular/core';
import { CampusService } from '../campus.service'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  campuses:any = [];

  constructor(public campus:CampusService) { }

  ngOnInit() {
    this.getCampuses();

  }

  getCampuses() {
    this.campuses = [];
    this.campus.getCampuses().subscribe((data: {}) => {
      console.log(data);
      this.campuses = data;
    });
  }

}
