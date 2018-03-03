import { connect } from 'react-redux'
import Page from './Page'

import { setUSAPopulation } from '../reducers/population'

const mapStatetoProps = state => {
  // console.log('state', state)
  return {
    stateNames: state.population.stateNames,
    statePop: state.population.statePop
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUSAPopulation: pop => {
      dispatch(setUSAPopulation(pop))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Page)
