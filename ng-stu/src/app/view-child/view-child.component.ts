import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  title: string = "childOne 组件"
  constructor() { }

  @ViewChildren(ChildOneComponent)
  children: QueryList<ChildOneComponent>


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.children.forEach( (item) => {
      console.log(item);
      item.helloevent.subscribe(  (ev) => {
        console.log(ev);
      })
    }) 
  }
}
