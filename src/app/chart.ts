export class Chart {
  constructor() {}

  svg
  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number,
  }
  width: number
  height: number
}

interface WordCloudData {
  textSize: number
  text: string
}

export class WordCloud extends Chart {
  data: WordCloudData[]
}
