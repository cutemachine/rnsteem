import types from './types'

const INITIAL_STATE = {
  followCount: { follower_count: '', following_count: '' },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FOLLOW_COUNT_SET:
      return { ...state, followCount: action.followCount }

    default:
      return state
  }
}
