import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  constructor() { }

  races: Array<any> = [
    {name: "人族", order: "first"},
    {name: "虫族", order: "second"},
    {name: "神族", order: "third"}
  ]

  ngOnInit() {

  }

}
