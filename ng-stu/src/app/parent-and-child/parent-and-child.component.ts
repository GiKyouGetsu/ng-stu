import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.scss']
})
export class ParentAndChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doSomething():void{
    alert("收到了子组件的自定义事件！");
  }

}