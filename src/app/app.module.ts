import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ng-ui-button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
