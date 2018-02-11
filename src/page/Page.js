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
        this.props.setUSAPopulation(res)
        console.log(res)
      })
  }

  componentWillMount() {
    this.getUSAData()
  }

  render() {
    const { USApopulation } = this.props

    return (
      <div>
        {' '}
        <ChartsMap states={USApopulation} />
      </div>
    )
  }
}

export default Page
