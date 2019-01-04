import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chile-three',
  templateUrl: './chile-three.component.html',
  styleUrls: ['./chile-three.component.scss']
})
export class ChileThreeComponent implements OnInit {

  @Output()
  public sayhello:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public sayHello():void{
    this.sayhello.emit("sayhello");
  }

}
