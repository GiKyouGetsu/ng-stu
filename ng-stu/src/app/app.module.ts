import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ChildOneComponent } from './content-child/child-one/child-one.component';
import { ChildTwoComponent } from './content-child/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentChildComponent,
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
