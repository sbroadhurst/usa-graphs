import { combineReducers } from 'redux'
import { reducer as population } from './population'

const reducers = combineReducers({
  population
})

export default reducers
