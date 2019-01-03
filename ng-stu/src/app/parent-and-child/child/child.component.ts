import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  private _panelTitle: string = "Im am child component"
  @Output() 
  public follow = new EventEmitter<string>();

  @Input()
  panelTitle: string;
  // set panelTitle(panelTitle:string){
  //   this._panelTitle="【"+panelTitle+"】";
  // }

  // get panelTitle():string{
  //   return this._panelTitle;
  // }

  constructor() { }

  ngOnInit() {
  }

  public emitAnEvent(event) {
    console.log(event);
    this.follow.emit("follow");
  }

  public childFun(data){
    console.log(data);
  }
}
