import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TesttFlyInComponent } from './testt-fly-in/testt-fly-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TesttFlyInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
