import types from './types'

const setColorUI = (color) => ({
  type: types.UI_COLOR_SET,
  payload: color
})

export default {
  setColorUI
}
