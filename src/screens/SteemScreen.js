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
  Form,
  Item,
  Label,
  Input,
  Title,
  Text,
} from 'native-base'
import { selectors } from '../state/rootReducer'
import { steemOperations } from '../state/steem'

const mapDispatchToProps = {
  getFollowCount: steemOperations.getFollowCount
}

const mapStateToProps = (state) => {
  const followCount = selectors.selectFollowCount(state)

  return { followCount }
}

const enhance = compose(
  translate(['redux'], { translateFuncName: 't', wait: true }),
  connect(mapStateToProps, mapDispatchToProps)
)

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

  componentDidMount() {
    this.props.getFollowCount('cutemachine')
  }

  handlePress = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { t } = this.props

    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>{t('common:labels.username')}</Label>
              <Input
                spellCheck={false}
                value='huhu'
              />
            </Item>
          </Form>
          <Text>{this.props.followCount.follower_count}</Text>
          <Text>{this.props.followCount.following_count}</Text>
          <Button full onPress={this.handlePress} style={{ marginBottom: 15 }}>
            <Text>{t('common:actions.back')}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
