import actions from './actions'
import { Client } from 'dsteem'

const client = new Client('https://api.steemit.com')

const {
  followCountSet,
} = actions

// Thunks
const getFollowCount = (name) => async (dispatch, getState) => {
  try {
    let [followCount] = await Promise.all([
      client.call('follow_api', 'get_follow_count', [name])
    ])

    if (!followCount) { throw new Error('Sorry, could not get follow count for user.') }
    dispatch(followCountSet(followCount))

  } catch (error) {
    console.log(error.message)
  }
}

export default {
  followCountSet,
  getFollowCount,
}
