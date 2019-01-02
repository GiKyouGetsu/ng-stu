import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-pipe',
  templateUrl: './ng-pipe.component.html',
  styleUrls: ['./ng-pipe.component.scss']
})
export class NgPipeComponent implements OnInit {
  currentTime: Date = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(
      () => { this.currentTime = new Date() }
      , 1000);
  }
}
