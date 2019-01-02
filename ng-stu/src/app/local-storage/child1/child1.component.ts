import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public writeData():void {
    window.localStorage.setItem("json", JSON.stringify({name: "wei",age: 18}))
  }
}
