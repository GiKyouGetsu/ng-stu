import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestFlyInComponent } from './test-fly-in/test-fly-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFlyInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
