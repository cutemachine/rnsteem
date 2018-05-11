import types from './types'

const followCountSet = (followCount) => ({
  type: types.FOLLOW_COUNT_SET,
  followCount
})

export default {
  followCountSet,
}
