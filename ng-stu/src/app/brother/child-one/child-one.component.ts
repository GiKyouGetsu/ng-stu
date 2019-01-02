import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  constructor(public eventBusservice: EventBusService) { }

  ngOnInit() {
  }

  public triggerEventBus() :void {
    this.eventBusservice.eventBus.next("第一个组件触发的事件")
  }


}
