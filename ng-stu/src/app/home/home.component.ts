import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public arr: Array<any> = [
    {
      name: 'one',
      age: 25
    },
    {
      name: 'two',
      age: 25
    },
    {
      name: 'three',
      age: 25
    }
  ]
  ngOnInit() {
  }

}
