import {Component, OnInit} from '@angular/core';
import cloud from 'd3-cloud';
import * as D3 from 'd3'

import sample from '../../assets/sample.json';
import {WordCloud} from '../chart';

@Component({
  selector: 'app-keyword-cloud',
  template: '<svg class="word-cloud"></svg>',
})

export class KeywordCloudComponent implements OnInit {
  public wordcloud = new WordCloud({width: 340, height: 240});
  private keywords = sample.insights[0].videos[0].insights.keywords;

  ngOnInit(): void {

    this.wordcloud.svg = D3.select('svg.word-cloud')
      .attr('width', this.wordcloud.width)
      .attr('height', this.wordcloud.height)
      .append('g')
      // .attr('transform', 'translate(' + (this.wordcloud.width / 2) + ',' + (this.height / 2) + ')');

    this.wordcloud.fillScale = D3.scaleOrdinal(D3.schemeCategory10);
    this.wordcloud.data = this.keywords.map(k => {
      return {
        text: k.text,
        textSize: k.instances.length + 1
      };
    });

    this.wordcloud.fontFace = 'Roboto'
    this.wordcloud.fontWeight = 'normal'

    cloud()
      .size([this.wordcloud.width, this.wordcloud.height])
      .words(this.wordcloud.data)
      .padding(5)
      .rotate(() => Math.random() * 2 * 10)
      .font(this.wordcloud.fontFace)
      .fontWeight(this.wordcloud.fontWeight)
      .fontSize(this.wordcloud.data.map(k => k.textSize))
      .on('end', () => this.finallyRender())
      .start();

    console.log(this.wordcloud);

  }

  finallyRender() {
    this.wordcloud.svg.selectAll('text')
      .data(this.wordcloud.data)
      .enter()
      .append('text')
      .style('font-size', d => d.textSize + 'px')
      .style('fill', (_, i) => this.wordcloud.fillScale(i))
      .attr('text-anchor', 'middle')
      .attr('class', 'word-cloud')
      .text(d => d.text);
  }

}
