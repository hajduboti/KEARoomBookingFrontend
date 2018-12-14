import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../services/data.service';
import { BookingService } from '../services/booking.service';



export interface PopupData {
  roomID: string;
  date: string;
  from: string;
  to: string;
}


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent   {

  bookingData;
  startDate: string;
  endDate;
  roomID;
  emailID;
  date;
  fromtime;
  totime;

  constructor(private dataService: DataService, private bs: BookingService, private dialogRef: MatDialogRef<PopupComponent>) {

    this.startDate = this.dataService.getStartDate();
    this.endDate = this.dataService.getEndDate();
    this.roomID = this.dataService.getRoomID();
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.emailID = user['user'];
    let splitStartDate =(this.startDate).split(" ");
    this.date = splitStartDate[0];
    this.fromtime = splitStartDate[1];
    let splitEndDate =(this.endDate).split(" ");
    this.totime = splitEndDate[1];

   }

  onBookClick(): void {
    this.bookingData = {
      "startDate": this.startDate,
      "endDate": this.endDate,
      "roomID": this.roomID,
      "emailID": this.emailID,
    };

    this.bs.bookRoom(this.bookingData).subscribe(
      response => {
        console.log('yay');
      },
      error => console.log('error', error)
    );
    this.dialogRef.close();
  }

  onNoClick(): void {

    this.dialogRef.close();
  }

}
