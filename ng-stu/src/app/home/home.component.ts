import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute:ActivatedRoute) { }

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

    this.activeRoute.params.subscribe(par => {
      console.log(par); 
    })

    this.activeRoute.queryParams.subscribe(res => {
      console.log(res);
    })
  }

}
