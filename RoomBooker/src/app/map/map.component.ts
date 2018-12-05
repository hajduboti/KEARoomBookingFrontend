import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public dataService: DataService) {
    (<any>window).right = this.right.bind(this);
    (<any>window).left = this.left.bind(this);

  }

  ngOnInit() {
    let available = this.dataService.getdata();
    for(let i in available){
      var boi = document.getElementById(available[i]);
      boi.style.fill="gray";
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
    }
}
