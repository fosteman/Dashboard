export class WordCloud {
  constructor(component, data) {
    this.data = data

    this.margin = {
      top   : 20,
      right : 20,
      bottom: 20,
      left  : 20
    }

    this.width = component.width
    this.height = component.height

  }

  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number,
  }
  width: number
  height: number
  fillScale: any /*color scale*/

  data: WordCloudData[]
  fontFace: string
  fontWeight: string
}

interface WordCloudData {
  text: string
  textSize: number
}

