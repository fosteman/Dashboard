export class Chart {
  constructor(component) {
    /*default constructor*/

    this.margin = {
      top   : 20,
      right : 20,
      bottom: 20,
      left  : 20
    }

    this.width = component.width - this.margin.left - this.margin.right;
    this.height = component.height - this.margin.top - this.margin.bottom;

  }

  svg
  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number,
  }
  width: number
  height: number
  fillScale: any /*color scale*/

}

interface WordCloudData {
  textSize: number
  text: string
}

export class WordCloud extends Chart {
  data: WordCloudData[]
  fontFace: string
  fontWeight: string

}
