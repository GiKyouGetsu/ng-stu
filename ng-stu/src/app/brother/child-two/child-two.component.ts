import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  public events:Array<any>=[];
  constructor(public eventBusservice: EventBusService) { }

  ngOnInit() {
    this.eventBusservice.eventBus.subscribe( (value) => {
      this.events.push(value + "-" + new Date()) 
    })
  }



}
