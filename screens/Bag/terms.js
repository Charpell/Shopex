import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components';

import BackButton from '../../components/BackButton';
import {fonts, colors, headerStyle, headerTitleStyle} from '../../utils';

export default class terms extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: 'TERMS AND CONDITIONS',
    headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />,
  })

  render() {
    return (
      <Container>
        <ScrollView>
          <Title>Privacy</Title>
          <Body>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Body>
          <Title>Payments</Title>
          <Body>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Body>
        </ScrollView>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: white;
  padding: 15px;
`
const Title = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 14;
  line-height: 17;
  font-family: ${fonts.boldFont};
  margin-top: 15px;
  margin-bottom: 5px;
`
const Body = styled.Text`
  color: #999;
  font-size: 13;
  line-height: 17;
  font-family: ${fonts.regularFont}
`