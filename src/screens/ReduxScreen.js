import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Left,
  Right,
  Text,
  Title,
} from 'native-base'
import sample from 'lodash.sample'
import { selectors } from '../state/rootReducer'
import { uiOperations } from '../state/ui'

class ReduxScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      header: (
        <Header>
          <Left />
          <Body>
            <Title>Redux Screen</Title>
          </Body>
          <Right />
        </Header>
      )
    }
  }

  handlePress = () => {
    this.props.navigation.goBack()
  }

  handlePressColor = () => {
    this.props.setColorUI(sample(['aqua', 'teal', 'purple', 'maroon', 'fuchsia']))
  }

  render () {
    return (
      <Container>
        <Content padder style={{backgroundColor: this.props.color}}>
          <Button full onPress={this.handlePressColor} style={{marginBottom: 15}}>
            <Text>Set Random Color</Text>
          </Button>
          <Button full onPress={this.handlePress}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setColorUI: uiOperations.setColorUI
}

const mapStateToProps = (state) => {
  const color = selectors.selectUIColor(state)

  return { color }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxScreen)
