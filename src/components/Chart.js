import React, { Component } from 'react'
import { Bar, Line, HorizontalBar } from 'react-chartjs-2'

class Chart extends Component {
  render() {
    const { selectValue } = this.props
    const { chartData } = this.props
    //  console.log(this.state.chartData)
    // console.log(selectValue)
    if (selectValue === 'Bar')
      return (
        <div className="Barchart">
          <Bar
            data={chartData}
            options={{
              title: {
                display: true,
                text: 'USA Population by State in 2017',
                fontSize: 25
              }
            }}
          />
        </div>
      )
    if (selectValue === 'Horizontal Bar')
      return (
        <div className="Horizontal Barchart">
          <HorizontalBar
            data={chartData}
            options={{
              title: {
                display: true,
                text: 'USA Population by State in 2017',
                fontSize: 25
              }

            }}

          />
        </div>
      )
    if (selectValue === 'Line')
      return (
        <div className="Linechart">
          <Line
            data={chartData}
            options={{
              title: {
                display: true,
                text: 'USA Population by State in 2017',
                fontSize: 25
              }
            }}
          />
        </div>

      )
  }
}

export default Chart
