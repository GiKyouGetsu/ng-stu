import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  public currentStyle1 = {}
  constructor() { }

  public canSave:boolean=false;
  public isUnchanged:boolean=false;
  public isSpecial:boolean=false;
  ngOnInit() {
  }
  setCurrentStyles1 () {
    this.currentStyle1 = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size.px':   30
    }
  }

}
