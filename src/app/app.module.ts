import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeywordCloudComponent } from './keyword-cloud/keyword-cloud.component';
import { KeywordBarsComponent } from './keyword-bars/keyword-bars.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeywordsInVideoComponent } from './keywords-in-video/keywords-in-video.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordCloudComponent,
    KeywordBarsComponent,
    KeywordsInVideoComponent,

  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
