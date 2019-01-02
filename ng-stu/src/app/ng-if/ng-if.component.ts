import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  isShow: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isShow = !this.isShow;
  }

}
