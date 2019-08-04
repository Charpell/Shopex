import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { colors, fonts } from '../utils'
import { removeItemCart, fetchCartItems } from '../store/actions/cartAction';

export class ProductEditItem extends Component {

  remove = () => {
    const { item_id } = this.props.products
    this.props.removeItemCart(item_id)
      .then(() => this.props.fetchCartItems())
    this.props.navigation.goBack()
  }

  render() {
    const { name, image, discount, price, size } = this.props.products;

  return (
    <Container
      onPress={() => this.remove()}
    >
      <ImageContainer>
        <ProductImage 
          resizeMode={'contain'}
          source={require('../assets/data/ja2.jpg')}
        />
      </ImageContainer>
      <ContentContainer>
        <NameContainer>
          <NameText>{name}</NameText>
        </NameContainer>
        <PriceContainer>
          { discount > 0 && <Discount>{discount}</Discount>}
          <Price>{price}</Price>
          <SizeContainer>
            <Symbol></Symbol>
            <SizeText>{size}</SizeText>
          </SizeContainer>
        </PriceContainer>
      </ContentContainer>
      <EditButtonContainer>
        <EditImage 
          resizeMode={'contain'}
          source={require('../assets/images/icon-remove.png')}
        />
      </EditButtonContainer>
    </Container>
    )
  }
}

export default connect(null, { removeItemCart, fetchCartItems })(ProductEditItem)

const Container = styled.TouchableOpacity`
  height: 80;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
  border-bottom-color: #dedede;
  border-bottom-width: 1;
`
const ImageContainer = styled.View`
  height: 80;
  width: 80;
  justify-content: center;
  align-items: center;
`
const ProductImage = styled.Image`
  width: 70;
  height: 70;
  background: white;
`
const ContentContainer = styled.View`
  justify-content: center;
  flex-direction: column;
  padding-right: 15px;
`
const NameContainer = styled.View`
`
const NameText = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 15;
  font-family: ${fonts.regularFont};
  text-transform: uppercase;
  max-width: 200;
  line-height: 18;
`
const PriceContainer = styled.View`
  flex-direction: row;
  padding-top: 5px;
`
const Price = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 13;
  font-family: ${fonts.boldFont}
`
const Discount = styled.Text`
  text-decoration-line: line-through;
  color: #999999;
  font-size: 13;
  font-family: ${fonts.regularFont};
  margin-right: 5px;
`
const SizeContainer = styled.View`
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const Symbol = styled.View`
  width: 6;
  height: 6;
  background: #CCCCCC;
  transform: rotate(45deg)
`
const SizeText = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 13;
  font-family: ${fonts.regularFont};
  margin-left: 5px;
`
const EditButtonContainer = styled.View`
  height: 80;
  align-self: flex-end;
  justify-content: center;
  right: 20;
  position: absolute
`
const EditImage = styled.Image`
  width: 16;
  height: 16
`