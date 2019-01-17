import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinksComponent } from './links.component';
import { linkRoutes } from './link.route';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LinksComponent
  
  ],
  imports: [
      
    RouterModule.forChild(linkRoutes)
    
  ],
  providers: []
})
export class LinkModule { }
