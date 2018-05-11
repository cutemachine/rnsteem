import React, { Component } from 'react'
import { Root } from 'native-base'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { translate } from 'react-i18next'
import i18n from './src/i18n'
import configureStore from './src/state/store'
import TestScreen from './src/screens/TestScreen'
import SteemScreen from './src/screens/SteemScreen'
import ReduxScreen from './src/screens/ReduxScreen'

const AppNavigator = StackNavigator({
  TestScreen: { screen: TestScreen },
  SteemScreen: { screen: SteemScreen },
  ReduxScreen: { screen: ReduxScreen }
}, { TestScreen, mode: 'card' })

const TranslatedStack = () => <AppNavigator screenProps={{ t: i18n.getFixedT() }} />

const TranslatedStackReloaded = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
})(TranslatedStack)

const store = configureStore({})
const persistor = persistStore(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <TranslatedStackReloaded />
          </Root>
        </PersistGate>
      </Provider>
    )
  }
}
