import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import { BrotherComponent } from './brother/brother.component';
import { ChildOneComponent } from './brother/child-one/child-one.component';
import { ChildTwoComponent } from './brother/child-two/child-two.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { Child1Component } from './local-storage/child1/child1.component';
import { Child2Component } from './local-storage/child2/child2.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAndChildComponent,
    ChildComponent,
    BrotherComponent,
    ChildOneComponent,
    ChildTwoComponent,
    LocalStorageComponent,
    Child1Component,
    Child2Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
