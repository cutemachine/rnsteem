import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxThunk),
      global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop
    )
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./rootReducer').default  // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
