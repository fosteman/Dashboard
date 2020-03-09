import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeywordCloudComponent } from './keyword-cloud/keyword-cloud.component';
import { KeywordBarsComponent } from './keyword-bars/keyword-bars.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordCloudComponent,
    KeywordBarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
