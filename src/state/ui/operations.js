import actions from './actions'
import steem from 'steem'

// If we do not need a thunk then just export the action
const { setColorUI } = actions

export default {
  setColorUI
}
