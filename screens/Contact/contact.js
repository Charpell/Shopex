import React, { Component } from 'react'
import styled from 'styled-components'

import BackButton from '../../components/BackButton'
import { headerStyle, headerTitleStyle } from '../../utils';

export default class home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'CONTACT',
    headerStyle,
    headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />

})

  render() {
    return (
      <Container>

      </Container>
    )
  }
}

const Container = styled.View`
`