import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  serviceData: [null];

  getdata() {
    return this.serviceData;
  }
  setdata(value) {
    this.serviceData = value;
  }

}
