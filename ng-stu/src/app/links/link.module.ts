import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinksComponent } from './links.component';
import { linkRoutes } from './link.route';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


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
