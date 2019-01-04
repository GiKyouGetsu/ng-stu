import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  public id: string;
  
  public title: string = "";
  @Output()
  helloevent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public set titlevalue(v : string) {
    this.title = v;
  }
  
  constructor() { }

  ngOnInit() {
  }
  public sayHello() {
    this.helloevent.emit(uuid())
  }

}
