import { Component, OnInit } from '@angular/core';
import sample from '../../assets/sample.json';
import {BarChart, WordCloud} from '../chart';
import * as D3 from 'd3';

@Component({
  selector: 'app-keyword-bars',
  template: '<div class="bar-chart"></div>',
})
export class KeywordBarsComponent implements OnInit {
  private barchart: BarChart

  constructor() {
    this.barchart = new BarChart(
      {width: 340, height: 240},
      sample.insights[0].videos[0].insights.keywords.map(k => {
        return {
          text: k.text,
          value: k.instances.length + 1
        }
      }))
  }

  ngOnInit(): void {

  }

}
