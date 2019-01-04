import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  constructor() { }

  @Output()
  follow: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  sayHello() {
    this.follow.emit("hello");
  }


}
