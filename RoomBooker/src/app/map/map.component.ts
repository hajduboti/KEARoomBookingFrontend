import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BookingService } from '../booking.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';

export interface DialogData {
  animal: string;
  name: string;
}

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


  constructor(public dataService: DataService, private bs: BookingService, public dialog: MatDialog) {
    (<any>window).right = this.right.bind(this);
    (<any>window).left = this.left.bind(this);

  }


  ngOnInit() {
    this.startDate = this.dataService.getStartDate();
    this.endDate = this.dataService.getEndDate();
    this.nonAvailableRoom = this.dataService.getdata();
    for(let i in this.nonAvailableRoom){
      let boi = document.getElementById(this.nonAvailableRoom[i]);
      boi.style.fill="#cecece";
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onClick(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    this.dataService.setRoomID(value);
    this.openDialog();
  }


  getEmailID(){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.emailID = user['user'];

  }


  right(){
    let i = document.getElementById("Layer_1");
    let y = document.getElementById("Layer_2");
    i.style.display = 'none';
    y.style.display = 'inline';
  }
  left(){
    let i = document.getElementById("Layer_1");
    let y = document.getElementById("Layer_2");
    y.style.display = 'none';
    i.style.display = 'inline';
  }
  myFunction(){
    console.log('test');
}

}
