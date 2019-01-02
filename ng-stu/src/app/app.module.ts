import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';
import { ValueBindComponent } from './value-bind/value-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    TempRefVarComponent,
    ValueBindComponent,
    EventBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
