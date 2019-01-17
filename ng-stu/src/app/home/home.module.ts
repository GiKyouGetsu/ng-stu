import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { PictureComponent } from './picture/picture.component';



@NgModule({
  declarations: [
    HomeComponent,
    TextComponent,
    PictureComponent
  
  ],
  imports: [
      CommonModule,
    RouterModule.forChild(homeRoutes)
    
  ],
  providers: []
})
export class HomeModule { } 