import { combineReducers } from 'redux'
import uiReducer, { uiSelectors } from './ui'

const rootReducer = combineReducers({
  ui: uiReducer
})

export default rootReducer

export const selectors = {
  // UI state
  selectUIColor: (state) => uiSelectors.selectUIColor(state.ui)
}
