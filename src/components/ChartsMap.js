import React from 'react'
import Chart from './Chart'

class ChartsMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Population',
            data: []
          }
        ]
      }
    }
  }

  renderStates() {
    const { states } = this.props
    return (
      <div>
        {states.map((info, index) => {
           this.setState({chartData: this.state.chartData.labels.concat([index.1])})
        })}
      </div>
    )
  }

  render() {
    return <div>{this.renderStates()}</div>
  }
}

export default ChartsMap
