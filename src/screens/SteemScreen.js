import React, { Component } from 'react'
import { compose } from 'redux'
import { translate } from 'react-i18next'
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Form,
  Item,
  Label,
  Input,
  Title,
} from 'native-base'

const enhance = compose(translate(['redux'], { translateFuncName: 't', wait: true }))

@enhance
export default class SteemScreen extends Component {
  static navigationOptions = () => ({
    header: (
      <Header>
        <Left />
        <Body>
          <Title>Steem</Title>
        </Body>
        <Right />
      </Header>
    )
  })

  render() {
    const { t } = this.props

    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                spellCheck={false}
                value='huhu'
              />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}
