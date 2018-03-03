import React from 'react'
import ChartsMap from '../components/ChartsMap'

class Page extends React.Component {
  getUSAData() {
    fetch(
      'https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=state:*'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        let stateNames = res.map(value => {
          return value[1]
        })
        let statePop = res.map(value => {
          return value[0]
        })
        stateNames = stateNames.slice(1)
        statePop = statePop.slice(1)
        //console.log(stateNames, statePop)
        this.props.setUSAPopulation({
          stateNames: stateNames,
          statePop: statePop
        })
      })
  }

  componentWillMount() {
    this.getUSAData()
  }

  render() {
    // console.log(this.props.stateNames)
    const { statePop, stateNames } = this.props

    return (
      <div>
        {' '}
        <ChartsMap stateNames={stateNames} statePop={statePop} />
      </div>
    )
  }
}

export default Page
