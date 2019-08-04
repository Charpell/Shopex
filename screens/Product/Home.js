import React, { Component } from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux';

import Slider from './Slider';
import BackButton from '../../components/BackButton';
import { sliderImages } from '../../data/product';
import { colors, fonts } from '../../utils'
import { addItemCart } from '../../store/actions/cartAction';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })
  
  state = {
    cart_id: '1xh7q3073djyue06rn',
    product_id: '',
    attributes: 'LG, red'
  }
  
  handleSubmit = () => {
    const { navigation } = this.props;
    const { product_id } = navigation.getParam('product');
    const { cart_id, attributes } = this.state;

    const data = {
      cart_id,
      product_id,
      attributes
    }

    this.props.addItemCart(data)
    navigation.navigate('CartListScreen')
  }

  render() {
    const { navigation } = this.props
    const product = navigation.getParam('product')
    console.log('product', product)
    return (
      <Container>
        <Header>
          <ProductName>{product.name.toUpperCase()}</ProductName>
          <ProductButtons>
            <BackButton navigation={navigation} />
          </ProductButtons>
        </Header>
        <SliderContainer>
          <Slider images={sliderImages} />
        </SliderContainer>
        <ProductDescription>
          <ProductDescriptionText>{product.description}</ProductDescriptionText>
        </ProductDescription>

        <ProductCart>
          <UpButton>
            <UpImage 
              resizeMode={'contain'}
              source={require('../../assets/images/icon-up.png')}
            />
            <CustomizeText>{'CUSTOMIZE'}</CustomizeText>
          </UpButton>
          <CartActionContainer>
            <PriceContainer>
              <Discount>${product.discounted_price}</Discount>
              <Price>${product.price}</Price>
            </PriceContainer>
            <AddToCartContainer>
              <AddToCartButton
                onPress={() => this.handleSubmit()}
              >
                <AddToCartText>{'ADD TO CART'}</AddToCartText>
              </AddToCartButton>
            </AddToCartContainer>
          </CartActionContainer>
        </ProductCart>
      </Container>
    )
  }
}

export default connect(null, { addItemCart })(Home)

const Container = styled.View`
  flex: 1;
  background: white;
`
const Header = styled.View`
  height: 85;
  padding: 0px 15px;
  background: ${colors.backgroundColor};
  flex-direction: row
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
  margin-top: 50px;
  right: -165;
`
const CloseButtonContainer = styled.View`
  width: 135;
  height: 135;
  background: yellow
`
const CloseImage = styled.Image`
  width: 15;
  height: 15;
`
const SliderContainer = styled.View`
  height: 75%
`
const ProductDescription = styled.View`
  background: ${colors.backgroundColor};
  padding: 15px;
  margin: 0px 15px;
  top: -75
`
const ProductDescriptionText = styled.Text`
  font-family: ${fonts.lightFont};
  font-size: 14;
  color: ${colors.secondaryColor};
  line-height: 20
`
const ProductCart = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80;
  background: white;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15;
  border-top-color: ${colors.greyColor};
  border-top-width: 0.5;
`
const UpButton = styled.TouchableOpacity`
  background: ${colors.backgroundColor};
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right-color: ${colors.greyColor};
  border-right-width: 0.5;
  padding: 0px 15px;
`
const UpImage = styled.Image`
  width: 16;
  height: 16;
  margin-bottom: 6
`
const CustomizeText = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 14;
  color: ${colors.secondaryColor};
`
const CartActionContainer = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  padding-bottom: 10px
`
const PriceContainer = styled.View`
  margin-right: 15px;
  justify-content: flex-end;
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
const AddToCartContainer = styled.View`
  justify-content: flex-end
`
const AddToCartButton = styled.TouchableOpacity`
  background: ${colors.primaryColor};
  height: 70%;
  justify-content: center;
  padding: 0px 10px;
  border-radius: 2
`
const AddToCartText = styled.Text`
  color: ${colors.boldFont};
  font-size: 12;
  color: white;
  letter-spacing: 3
`