import React, { Component } from 'react'
import {
  Root
} from 'native-base'
import { StackNavigator } from 'react-navigation'
import TestScreen from './screens/TestScreen'

const AppNavigator = StackNavigator({
  TestScreen: { screen: TestScreen }
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
