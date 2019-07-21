import React, { Component } from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components'

import Slider from './Slider';
import { sliderImages } from '../../data/product';
import { colors, fonts } from '../../utils'

export default class Home extends Component {
  render() {
    const { navigation } = this.props
    const product = navigation.getParam('product')

    return (
      <Container>
        <Header>
          <ProductName>{product.name.toUpperCase()}</ProductName>
          <ProductButtons>
            <CloseButtonContainer>
              <CloseImage 
                resizeMode={'contain'}
                source={require('../../assets/images/icon-close-black.png')}
              />
            </CloseButtonContainer>
          </ProductButtons>
        </Header>
        <SliderContainer>
          <Slider images={sliderImages} />
        </SliderContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: white;
`
const Header = styled.View`
  height: 85;
  padding: 0px 15px;
  background: ${colors.backgroundColor}
`
const ProductName = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 15;
  color: ${colors.secondaryColor};
  align-self: flex-start;
  max-width: 80%;
  padding-top: 50;
`
const ProductButtons = styled.View`
  flex-direction: row;
  align-self: flex-end;
  right: -15;
  padding-top: 50;
`
const CloseButtonContainer = styled.View`
  width: 35;
  height: 35;
`
const CloseImage = styled.Image`
  width: 15;
  height: 15;
`
const SliderContainer = styled.View`
  height: 75%
`