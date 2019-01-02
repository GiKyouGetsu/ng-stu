import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.scss']
})
export class EventBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickBtn(event) : void {
    console.log(event);
    alert(event.type)
  }

}
