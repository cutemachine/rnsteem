import React, { Component } from 'react'
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

export default class ReduxScreen extends Component {
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

  render () {
    return (
      <Container>
        <Content padder>
          <Text>Redux example to be added</Text>
          <Button full onPress={this.handlePress}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

