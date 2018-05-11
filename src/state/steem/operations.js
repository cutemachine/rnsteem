import actions from './actions'
import steem from 'steem'

const {
  followCountSet,
} = actions

// Thunks
const getFollowCount = (name) => async (dispatch, getState) => {
  try {
    // Use this server, as it allows to grab the whole account history from blockchain
    // TODO: allow configuration for Steem API server in UI
    steem.api.setOptions({ url: 'wss://rpc.buildteam.io' })
    let [followCount] = await Promise.all([
      steem.api.getFollowCountAsync(name),
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
