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

export default class TestScreen extends Component {
  static navigationOptions = () => ({
    header: (
      <Header>
        <Left />
        <Body>
          <Title>Test Screen</Title>
        </Body>
        <Right />
      </Header>
    )
  })

  handlePress = () => {
    this.props.navigation.navigate('ReduxScreen')
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Text>React Native Steem Starter</Text>
          <Button full onPress={this.handlePress}>
            <Text>Redux Example</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
