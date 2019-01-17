import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { PictureComponent } from './picture/picture.component';
import { UserInfComponent } from '../user-inf/user-inf.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    TextComponent,
    PictureComponent
  
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
    
  ],
  providers: []
})
export class HomeModule { } 
