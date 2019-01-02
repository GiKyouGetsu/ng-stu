import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public readData():void{
    var json=window.localStorage.getItem("json");
    // window.localStorage.removeItem("json");
    var obj=JSON.parse(json);
    console.log(obj.name);
    console.log(obj.age);
  }

}
