import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  urls: Array<any> = []
  constructor() { }

  ngOnInit() {
    this.urls.push({
      url: "src/assets/img/1.3M.png",
      isActive: true
    })
    this.urls.push({
      url:"src/assets/img/1.5M.png",
      isActive: false
    })
    this.urls.push({
      url:"src/assets/img/68K.png",
      isActive: false
    })
    this.urls.push({
      url:"src/assets/img/321K.png",
      isActive: false
    })

  }

}
