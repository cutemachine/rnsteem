import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { translate } from 'react-i18next'
import styled from "styled-components"
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Footer,
  FooterTab,
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

const Level = styled.View`
  padding-top: 10;
  padding-bottom: 10;
`

const LevelTitle = styled.Text`
  text-align: center;
  font-size: 12;
`

const LevelItem = styled.Text`
  text-align: center;
  font-size: 48;
`

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

  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  handleChangeUsername = (value) => {
    this.setState({
      username: value.toLowerCase()
    })

    // FIX: Don't do this in production as it makes too many requests.
    this.props.getFollowCount(value)
  }

  handlePress = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { t } = this.props

    return (
      <Container>
        <Content padder>
          <Form style={{marginBottom: 100}}>
            <Item floatingLabel>
              <Label>{t('common:labels.username')}</Label>
              <Input
                spellCheck={false}
                value={this.state.username}
                onChangeText={this.handleChangeUsername}
              />
            </Item>
          </Form>
          <Level>
            <LevelTitle>FOLLOWERS</LevelTitle>
            <LevelItem>
              {this.props.followCount.follower_count}
            </LevelItem>
          </Level>
          <Level>
            <LevelTitle>FOLLOWING</LevelTitle>
            <LevelItem>
              {this.props.followCount.following_count}
            </LevelItem>
          </Level>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={this.handlePress}>
              <Text>{t('common:actions.back')}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
