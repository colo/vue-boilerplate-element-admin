export default {
  easypiechartPercentFromValueMinMax: function (value, min, max) {
    // if (typeof value !== 'number') {
    //   value = 0
    // }
    // if (typeof min !== 'number') {
    //   min = 0
    // }
    // if (typeof max !== 'number') {
    //   max = 0
    // }

    if (min > max) {
      let t = min
      min = max
      max = t
    }

    if (min > value) {
      min = value
    }
    if (max < value) {
      max = value
    }

    // state.legendFormatValueDecimalsFromMinMax(min, max);

    // if (state.tmp.easyPieChartMin === null && min > 0) {
    min = 0
    // }
    // if (state.tmp.easyPieChartMax === null && max < 0) {
    max = 0
    // }

    let pcent

    if (min < 0 && max > 0) {
      // it is both positive and negative
      // zero at the top center of the chart
      max = (-min > max) ? -min : max
      pcent = Math.round(value * 100 / max)
    } else if (value >= 0 && min >= 0 && max >= 0) {
      // clockwise
      pcent = Math.round((value - min) * 100 / (max - min))
      if (pcent === 0) {
        pcent = 0.1
      }
    } else {
      // counter clockwise
      pcent = Math.round((value - max) * 100 / (max - min))
      if (pcent === 0) {
        pcent = -0.1
      }
    }

    return pcent
  }
}
