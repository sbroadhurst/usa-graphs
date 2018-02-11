import { connect } from 'react-redux'
import Page from './Page'

import { setUSAPopulation } from '../reducers/population'

const mapStatetoProps = state => {
  return {
    USApopulation: state.population.USApopulation
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
