import React, { Component } from 'react'
import {
  Root
} from 'native-base'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import TestScreen from './screens/TestScreen'
import ReduxScreen from './screens/ReduxScreen'

const AppNavigator = StackNavigator({
  TestScreen: { screen: TestScreen },
  ReduxScreen: { screen: ReduxScreen }
}, { TestScreen, mode: 'card' })

const store = configureStore({})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    )
  }
}
