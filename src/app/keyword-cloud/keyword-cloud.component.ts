import {Component, OnInit} from '@angular/core';
import * as D3 from 'd3';

import sample from '../../assets/sample.json';
import {WordCloud} from '../chart';

@Component({
  selector: 'app-keyword-cloud',
  template: '<svg class="word-cloud"></svg>',
})

export class KeywordCloudComponent implements OnInit {
  public wordcloud = new WordCloud();
  private keywords = sample.insights[0].videos[0].insights.keywords;


  ngOnInit(): void {

    this.wordcloud.data = this.keywords.map(k => {
      return {
        text: k.text,
        textSize: k.instances.length + 1
      };
    });
    console.log(this.wordcloud);

  }

}
