import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styled from 'styled-components';

import LogoImage from '../../components/LogoImage';
import MenuButton from '../../components/MenuButton';
import ProductListItem from '../../components/ProductListItem';
import { cart } from '../../data/product';
import { fonts, colors, headerStyle } from '../../utils';

export default class cartlist extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <CartHeader>
          <CartHeaderLeft>
            <View style={{ flexDirection: 'row' }}>
              <HeaderText>{'You have '}</HeaderText>
              <HeaderTextBold>{'3 items '}</HeaderTextBold>
              <HeaderText>{'in your'}</HeaderText>
            </View>
            <HeaderText>{'shopping bag.'}</HeaderText>
          </CartHeaderLeft>
          <CartHeaderRight>
            <CheckoutButton
              onPress={() => this.props.navigation.navigate('Address')}
            >
              <CheckoutText>{'CHECKOUT'}</CheckoutText>
            </CheckoutButton>
          </CartHeaderRight>
        </CartHeader>
        <CartProduct>
          <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((product, index) => (
              <ProductListItem
                key={index} 
                navigation={this.props.navigation}
                products={product}
              />
            ))}
          </ScrollView>
        </CartProduct>
        <CardPaymentTotal>
          <SubTotal>
            <SubTotalText>SubTotal</SubTotalText>
            <SubTotalText style={{ textAlign: 'right' }}>$334,50</SubTotalText>
          </SubTotal>
          <SubTotal>
            <SubTotalText>SubTotal</SubTotalText>
            <SubTotalText style={{ textAlign: 'right' }}>$10</SubTotalText>
          </SubTotal>
        </CardPaymentTotal>
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalText style={{ textAlign: 'right' }}>$344</TotalText>
        </TotalContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundColor}
`
const CartHeader = styled.View`
  background: #FFFFFF;
  flex-direction: row;
  border-bottom-width: 0.7;
  border-bottom-color: #BFBFBF;
  height: 60;
  justify-content: center;
  width: 100%;

`
const CartHeaderLeft = styled.View`
  width: 50%;
  padding-left: 15px;
  padding-top: 10px
`
const HeaderText = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 14;
  color: #888888
`
const HeaderTextBold = styled.Text`
  font-family: ${fonts.boldFont};
  font-size: 14;
  color: ${colors.primaryMoreColored}
`
const CartHeaderRight = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`
const CheckoutButton = styled.TouchableOpacity`
  background: ${colors.primaryMoreColored};
  justify-content: center;
  align-items: center;
  height: 30;
  width: 120;
  align-self: flex-end;
  margin-right: 15px;
`
const CheckoutText = styled.Text`
  color: white;
  font-size: 12;
  font-family: ${fonts.boldFont};
  letter-spacing: 3;
  text-align: center;
  font-weight: 600
`
const CartProduct = styled.View`
  background: white
`
const CardPaymentTotal = styled.View`
  padding: 15px;
  padding-bottom: 0px;
`
const SubTotal = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`
const SubTotalText = styled.Text`
  flex: 0.5;
  text-align: left;
  font-size: 13;
  font-family: ${fonts.regularFont};
  color: #999999
`
const TotalContainer = styled.View`
  flex-direction: row;
  border-top-width: 0.5;
  border-top-color: #BFBFBF;
  margin-top: 10px;
  padding: 15px;
`
const TotalText = styled.Text`
  flex: 0.5;
  text-align: left;
  font-size: 18;
  font-family: ${fonts.regularFont};
  color: ${colors.secondaryColor}
`
