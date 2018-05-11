import { combineReducers } from 'redux'
import uiReducer, { uiSelectors } from './ui'
import steemReducer, { steemSelectors } from './steem'

const rootReducer = combineReducers({
  ui: uiReducer,
  steem: steemReducer,
})

export default rootReducer

export const selectors = {
  // UI state
  selectUIColor: state => uiSelectors.selectUIColor(state.ui),

  // Steem state
  selectFollowCount: state => steemSelectors.selectFollowCount(state.steem),
}
