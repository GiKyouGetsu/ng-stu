import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildOneComponent } from './view-child/child-one/child-one.component';
import { ChildTwoComponent } from './view-child/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
