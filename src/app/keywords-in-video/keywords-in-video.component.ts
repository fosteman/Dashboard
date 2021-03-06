import { Component } from '@angular/core';
import sample from '../../assets/sample.json';

function convertTime2Seconds (time: string): number {
  let a = time.split(':')
  return Math.floor((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))
}

@Component({
  selector: 'app-keywords-in-video',
  templateUrl: './keywords-in-video.component.html'
})
export class KeywordsInVideoComponent{
  data: any[]
  period: any
  view: any[] = [800, 240];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Seconds in video';
  yAxisLabel: string = 'Analytics Inferences';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor() {
    this.period = []
    var second: number = 0
    // populate x axis.
    while (second <= convertTime2Seconds(sample.insights[0].videos[0].insights.duration)) {
      this.period.push({
        second,
        nKeywords: 0,
        nOCR: 0,
      })
      second += 15
    }

    // count keyword distribution
    sample.insights[0].videos[0].insights.keywords.forEach(
      keyword =>
        keyword.instances.forEach(instance =>
          {
            this.period[Math.floor(convertTime2Seconds(instance.start) / 15)].nKeywords += 1
          }
        )
    );

    // count ocr distribution
    sample.insights[0].videos[0].insights.ocr.forEach(
      ocr => {
        ocr.instances.forEach(instance =>
          {
            this.period[Math.floor(convertTime2Seconds(instance.start) / 15)].nOCR += 1
          }
        )
      }
    );

    this.data = [{
      name: "keywords",
      series:  this.period.map(p => {
        return {
          name: p.second,
          value: p.nKeywords
        }
      })
    },
      {
        name: "Optical characters",
        series:  this.period.map(p => {
          return {
            name: p.second,
            value: p.nOCR
          }
        })
      }

    ]
  }
}
