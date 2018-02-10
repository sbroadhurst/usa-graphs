import * as action from './actions'

export const setFLPopulation = census => {
  return {
    type: action.FL_POPULATION,
    payload: { flpopulation: census }
  }
}

const ACTION_HANDLERS = {
  [action.FL_POPULATION]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
  flpopulation: []
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
