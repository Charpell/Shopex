import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import MenuButton from '../../components/MenuButton';
import LogoImage from '../../components/LogoImage';
import InspirationText from '../../components/InspirationText';
import Line from '../../components/Line';
import { fonts, colors, headerStyle }  from '../../utils';
export default class Home extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <VerticalBoxContainer activeOpacity={0.95}>
          <VerticalBox style={{ backgroundColor: '#D3D3D3' }}>
            <Line width={40} />
            <InspirationText strongText="L" restLetters="IFE" />
            <Line width={40} />
          </VerticalBox>
        </VerticalBoxContainer>

        <VerticalBoxContainer activeOpacity={0.95}>
          <VerticalBox style={{ backgroundColor: '#A9A9A9' }}>
            <Line width={88} />
            <InspirationText strongText="F" restLetters="ASHION" />
            <Line width={88} />
          </VerticalBox>
        </VerticalBoxContainer>

        <VerticalBoxContainer activeOpacity={0.95}>
          <VerticalBox style={{ backgroundColor: '#696969' }}>
            <Line width={72} />
            <InspirationText strongText="V" restLetters="IDEOS" />
            <Line width={72} />
          </VerticalBox>
        </VerticalBoxContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex-direction: row;
  flex: 1;
`
const VerticalBoxContainer = styled.TouchableOpacity`
  height: 100%;
  flex: 1;
`
const VerticalBox = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
