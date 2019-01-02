import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-bind',
  templateUrl: './value-bind.component.html',
  styleUrls: ['./value-bind.component.scss']
})
export class ValueBindComponent implements OnInit {

  public imgsrc: string = './assets/cui.jpg';
  constructor() { }

  ngOnInit() {
  }

  public changesrc() {
    if (Math.ceil(Math.random()*100000) % 2) {
      this.imgsrc = "./assets/zhao.jpg"
    } else {
      this.imgsrc = "./assets/cui.jpg"
    }
  }
}
