import {Component, OnInit} from '@angular/core';
import cloud from 'd3-cloud';
import * as d3 from 'd3'

import sample from '../../assets/sample.json';
import {WordCloud} from '../chart';

@Component({
  selector: 'app-keyword-cloud',
  template: '<div class="word-cloud"></div>',
})

export class KeywordCloudComponent implements OnInit {
  public wordcloud

  constructor() {
    this.wordcloud = new WordCloud(
      {width: 340, height: 240},
      sample.insights[0].videos[0].insights.keywords.map(k => {
        return {
          text: k.text,
          textSize: Math.log((k.instances.length + 10) * 2000)
        };
      }));
  }


  ngOnInit(): void {
    this.wordcloud.fillScale = d3.scaleOrdinal(d3.schemeCategory10);
    this.wordcloud.fontFace = 'Roboto'
    this.wordcloud.fontWeight = 'normal'

    const drawLayout = (words) => {

      let width = this.wordcloud.width
      let height = this.wordcloud.height

      d3.select('div.word-cloud').append('svg')
        .attr("width", width)
        .attr("height", height)
        .append('g')
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")") // center the element
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', d => d.textSize + 'px')
        .style('fill', (_, i) => this.wordcloud.fillScale(i))
        .attr('text-anchor', 'middle')
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text);
    }

    let layout = cloud()
      .size([340, 240])
      .words(this.wordcloud.data)
      .padding(5)
      .rotate(() => Math.random() * 2 * 10)
      .font(this.wordcloud.fontFace)
      .fontWeight(this.wordcloud.fontWeight)
      .fontSize(k => k.textSize)
      .on('end', drawLayout)
      .start();
  }







}
