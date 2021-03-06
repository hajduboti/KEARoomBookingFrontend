import { BookingService } from '../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';


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
    // (<any>window).right = this.right.bind(this);
    // (<any>window).left = this.left.bind(this);

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
    const dialogRef = this.dialog.open(PopupComponent, { });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onClick(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    let valid = true;
    for (let i in this.nonAvailableRoom) {
      if (this.nonAvailableRoom[i] === value) {
        valid = false;
      }
    }
    if (valid === true) {
      this.dataService.setRoomID(value);
      this.openDialog();
    }
  }



  // right(){
  //   let i = document.getElementById("Layer_1");
  //   let y = document.getElementById("Layer_2");
  //   i.style.display = 'none';
  //   y.style.display = 'inline';
  // }
  // left(){
  //   let i = document.getElementById("Layer_1");
  //   let y = document.getElementById("Layer_2");
  //   y.style.display = 'none';
  //   i.style.display = 'inline';
  // }

}
