import * as action from './actions'

export const setUSAPopulation = census => {
  return {
    type: action.USA_POPULATION,
    payload: { USApopulation: census }
  }
}

const ACTION_HANDLERS = {
  [action.USA_POPULATION]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
  USApopulation: []
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
