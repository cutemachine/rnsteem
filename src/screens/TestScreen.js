import React, { Component } from 'react'
import {
  Header,
  Body,
  Title,
  Left,
  Right,
  Container,
  Content,
  Text
} from 'native-base'

export default class TestScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      header: (
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      )
    }
  }

  render () {
    return (
      <Container>
        <Content padder>
          <Text>React Native Steem Starter</Text>
        </Content>
      </Container>
    )
  }
}
