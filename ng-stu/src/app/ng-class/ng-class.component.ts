import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  public currentClass0: {}; 
  public currentClass1: Array<any> = []; 
  public currentClass2: string='';
  public currentClass3: string='';
  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setCurrentClass0() {
    this.currentClass0 = {
      'saveable modified': this.canSave,
      'special': this.isSpecial
    }
  }

  setCurrentClass1() {
    this.currentClass1.push("saveable");
  }
  setCurrentClass2() {
    this.currentClass2 = "modified";
  }

  // setCurrentClass3() {
  //   this.currentClass3 = "modifie";
  // }

}
