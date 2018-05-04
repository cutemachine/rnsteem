import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import sample from 'lodash.sample'
import { selectors } from '../state/rootReducer'
import { uiOperations } from '../state/ui'

const mapDispatchToProps = {
  setColorUI: uiOperations.setColorUI
}

const mapStateToProps = (state) => {
  const color = selectors.selectUIColor(state)

  return { color }
}

const enhance = compose(
  translate(['redux'], { translateFuncName: 't', wait: true }),
  connect(mapStateToProps, mapDispatchToProps)
)

@enhance
export default class ReduxScreen extends Component {
  static navigationOptions = () => ({
    header: (
      <Header>
        <Left />
        <Body>
          <Title>Redux</Title>
        </Body>
        <Right />
      </Header>
    )
  })

  handlePress = () => {
    this.props.navigation.goBack()
  }

  handlePressColor = () => {
    this.props.setColorUI(sample(['aqua', 'teal', 'purple', 'maroon', 'fuchsia']))
  }

  render() {
    const { t, i18n, color } = this.props

    return (
      <Container>
        <Content padder style={{ backgroundColor: color }}>
          <Button full onPress={this.handlePressColor} style={{ marginBottom: 15 }}>
            <Text>{t('colorButtonTitle')}</Text>
          </Button>
          { i18n.language !== 'de'
            ? <Button full onPress={() => { i18n.changeLanguage('de') }} style={{ marginBottom: 15 }}><Text>{t('deButtonTitle')}</Text></Button>
            : <Button full onPress={() => { i18n.changeLanguage('en') }} style={{ marginBottom: 15 }}><Text>{t('enButtonTitle')}</Text></Button>
          }
          <Button full onPress={this.handlePress} style={{ marginBottom: 15 }}>
            <Text>{t('common:actions.back')}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
