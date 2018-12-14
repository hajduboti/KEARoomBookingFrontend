import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  serviceData: [null];
  startDate;
  endDate;


  getdata() {
    return this.serviceData;
  }
  setdata(value) {
    this.serviceData = value;
  }

  setDates(startTime, endTime){
    this.startDate = startTime;
    this.endDate = endTime;
  }

  getStartDate(){
    return this.startDate;
  }

  getEndDate(){
    return this.endDate;
  }
  getRoomID() {
    return this.serviceData;
  }
  setRoomID(value) {
    this.serviceData = value;
  }

}
