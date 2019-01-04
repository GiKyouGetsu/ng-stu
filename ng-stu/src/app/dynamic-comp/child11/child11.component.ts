import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.scss']
})
export class Child11Component implements OnInit {

  @Input()
  title: string="默认标题";
  constructor() { }

  @Output()
  btnClick: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  public triggerEvent(): void {
    this.btnClick.emit("子组件的点击事件...");
  }

}
