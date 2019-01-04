import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, flash } from 'ng-animate';

@Component({
  selector: 'app-test-fly-in',
  templateUrl: './test-fly-in.component.html',
  styleUrls: ['./test-fly-in.component.scss'],
  animations: [
    trigger('flash', [transition('* => *', useAnimation(flash, {
      params: {
        timing: 5, delay:2
      }
    }))])
  ]
})
export class TestFlyInComponent implements OnInit {

  flash: any;
  constructor() { }

  ngOnInit() {
  }

}
