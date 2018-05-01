import React, { Component } from 'react'
import {
  Root,
  Header,
  Body,
  Title,
  Left,
  Right,
  Container,
  Content,
  Text
} from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Text>React Native Steem Starter</Text>
          </Content>
        </Container>
      </Root>
    )
  }
}
