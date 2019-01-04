import { Component, OnInit, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @ContentChildren(ChildTwoComponent)
  childrenTwo: QueryList<ChildTwoComponent>

  @Output()
  follow: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.childrenTwo.forEach(element => {
      console.log(element);
      element.follow.subscribe((event) => {
        console.log("收到event" + event)
      })
    });
  }

  

}
