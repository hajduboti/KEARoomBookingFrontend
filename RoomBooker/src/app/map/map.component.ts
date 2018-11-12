import { Component, OnInit } from '@angular/core';

let available=[1,5,7,9,22,23,24,25,26,27,30];

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {(<any>window).right = this.right.bind(this);(<any>window).left = this.left.bind(this);}

  ngOnInit() {
    for(let i in available){
      console.log(available[i]);
      var boi = document.getElementById(available[i]);
      boi.style.fill="white";
      boi.display='none';
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
}
