import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2'

class Chart extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      USApopulation: props.USApopulation
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          options={{
            title: {
              text: 'USA Population by State',
              fontSize: 25
            }
          }}
        />
      </div>
    )
  }
}

export default Chart
