import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  nonAvailableRoom = [];

  constructor(public dataService: DataService) {
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
    console.log('test');
}
onClick(event) {
  var target = event.target || event.srcElement || event.currentTarget;
  var idAttr = target.attributes.id;
  var value = idAttr.nodeValue;
  console.log(value);
}
}
