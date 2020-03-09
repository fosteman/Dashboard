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

  data: Datum2D[]
  fontFace: string
  fontWeight: string
}

export class BarChart {
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

  data: Datum2D[]
}

interface Datum2D {
  text: string
  value: number
}
