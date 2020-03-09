import { Component, OnInit } from '@angular/core';
import * as D3 from 'd3';

import rawJson from '../../assets/sample.json';

@Component({
  selector: 'app-keyword-cloud',
  template: '<svg class="word-cloud"></svg>',
})
export class KeywordCloudComponent implements OnInit {

  ngOnInit(): void {
  }

}
