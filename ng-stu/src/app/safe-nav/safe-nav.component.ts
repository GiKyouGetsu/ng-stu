import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-nav',
  templateUrl: './safe-nav.component.html',
  styleUrls: ['./safe-nav.component.scss']
})
export class SafeNavComponent implements OnInit {
  currentRace: any = null;
  constructor() { }

  ngOnInit() {
  }

}
