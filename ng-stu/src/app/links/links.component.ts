import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(
    public router:Router,
    public activeRouter: ActivatedRoute

    ) { }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((queryParam) => {
      console.log(queryParam)
    })
  }

}
