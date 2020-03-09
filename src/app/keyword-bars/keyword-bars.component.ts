import { Component, OnInit } from '@angular/core';
import sample from '../../assets/sample.json';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-keyword-bars',
  templateUrl: './keyword-bars.component.html',
})
export class KeywordBarsComponent {
  data
  view: any[] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = 'Popularity';
  showYAxisLabel = true;
  xAxisLabel = 'Keyword';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    this.data = sample.insights[0].videos[0].insights.keywords.map(k => {
      return {
        name: k.text,
        value: k.instances.length + 1
      }
    })
  }
}
