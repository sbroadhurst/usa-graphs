import React from 'react'

class Page extends React.Component {
  constructor(props) {
    super(props)

    console.log(this)
  }

  getFlData() {
    fetch(
      'https://api.opendatanetwork.com/data/v1/values?app_token=cQovpGcdUT1CSzgYk0KPYdAI0&describe=true&forecast=5&format=google&variable=demographics.population.count&entity_id=0400000US12'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.setFLPopulation(res)
        console.log(res)
      })
  }

  componentWillMount() {
    this.getFlData()
  }

  render() {
    const { flpopulation } = this.props
    console.log('hello in render')
    return <p> hey </p>
  }
}

export default Page
