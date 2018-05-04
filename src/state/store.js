import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import ReduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore(initialState) {
  const persistConfig = {
    key: 'root',
    storage // defaults to AsyncStorage for react-native
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistedReducer,
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
