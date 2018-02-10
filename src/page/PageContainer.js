import { connect } from 'react-redux'
import Page from './Page'

import { setFLPopulation } from '../reducers/population'

const mapStatetoProps = state => {
  return {
    flpopulation: state.population.flpopulation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFLPopulation: pop => {
      dispatch(setFLPopulation(pop))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Page)
