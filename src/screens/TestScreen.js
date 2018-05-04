import React, { Component } from 'react'
import { compose } from 'redux'
import { translate } from 'react-i18next'
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

const enhance = compose(translate(['redux'], { translateFuncName: 't', wait: true }))

@enhance
export default class TestScreen extends Component {
  static navigationOptions = () => ({
    header: (
      <Header>
        <Left />
        <Body>
          <Title>Steem Starter</Title>
        </Body>
        <Right />
      </Header>
    )
  })

  handlePress = () => {
    this.props.navigation.navigate('ReduxScreen')
  }

  render() {
    const { t } = this.props
    return (
      <Container>
        <Content padder>
          <Button full onPress={this.handlePress}>
            <Text>{t('reduxButtonTitle')}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
