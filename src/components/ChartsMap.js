import React from 'react'
import Chart from './Chart'

class ChartsMap extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      selectValue: 'Bar'
    }
  }

  handleChange(e) {
    this.setState({
      selectValue: e.target.value
    })
    //change value to the select type of chart

  }

  render() {
    const { stateNames, statePop } = this.props
    const { selectValue } = this.state
    const chartData = {
      labels: stateNames,
      datasets: [
        {
          label: 'Population',
          data: statePop,
          backgroundColor: 'green'
        }
      ]
    }

    return (
      <div>
        <select value={this.state.selectValue} onChange={this.handleChange}>
          <option value="Bar">Bar </option>
          <option value='Horizontal Bar'>Horizontal Bar </option>
          <option value="Line"> Line </option>
        </select>
        <Chart chartData={chartData} selectValue={selectValue} />
      </div>
    )
  }
}

export default ChartsMap
