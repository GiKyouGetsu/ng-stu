import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TwowayBindComponent } from './twoway-bind/twoway-bind.component';
import { FontResizerComponent } from './twoway-bind/font-resizer/font-resizer.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgPipeComponent } from './ng-pipe/ng-pipe.component';
import { SafeNavComponent } from './safe-nav/safe-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowayBindComponent,
    FontResizerComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    NgPipeComponent,
    SafeNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
