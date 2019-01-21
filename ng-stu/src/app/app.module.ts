
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router'
import { AppComponent } from './app.component';
import { appRoute } from './app-route';
import { BrowserModule } from '@angular/platform-browser';
import { MyPreloading } from 'src/common/prelaoding-strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute,{
      preloadingStrategy: MyPreloading,
      useHash: true
    })
  ],
  providers: [MyPreloading],
  bootstrap: [AppComponent]
})
export class AppModule { }
