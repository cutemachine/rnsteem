import types from './types'

const INITIAL_STATE = {
  color: 'white'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UI_COLOR_SET:
      return { ...state, color: action.payload }

    default:
      return state
  }
}
