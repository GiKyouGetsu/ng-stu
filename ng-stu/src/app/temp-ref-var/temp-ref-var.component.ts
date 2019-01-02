import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  templateUrl: './temp-ref-var.component.html',
  styleUrls: ['./temp-ref-var.component.scss']
})
export class TempRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello(name: string): void {
    alert(name);
  }

}
