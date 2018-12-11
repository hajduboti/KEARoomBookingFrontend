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

  setDates(startDate, endDate){
    this.startDate = startDate;
    this.endDate = endDate;
  }

  getStartDate(){
    return this.startDate;
  }
  
  getEndDate(){
    return this.endDate;
  }
}
