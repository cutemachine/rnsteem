import React, { Component } from 'react'
import {
  Root
} from 'native-base'
import { StackNavigator } from 'react-navigation'
import TestScreen from './screens/TestScreen'
import ReduxScreen from './screens/ReduxScreen'

const AppNavigator = StackNavigator({
  TestScreen: { screen: TestScreen },
  ReduxScreen: { screen: ReduxScreen }
}, { TestScreen, mode: 'card' })

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}
