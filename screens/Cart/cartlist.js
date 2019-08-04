import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay'


import LogoImage from '../../components/LogoImage';
import MenuButton from '../../components/MenuButton';
import ProductListItem from '../../components/ProductListItem';
import { cart } from '../../data/product';
import { fonts, colors, headerStyle } from '../../utils';
import { fetchCartItems } from '../../store/actions/cartAction';

class cartlist extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  // componentDidMount() {
  //   this.props.fetchCartItems()
  // }

  renderCard = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.props.cart.cart.map((product, index) => (
          <ProductListItem
            key={index} 
            navigation={this.props.navigation}
            products={product}
          />
        ))}
      </ScrollView>
    )
  }

  renderSubTotal = () => {
    return (
      <View>
        {this.props.cart.cart.map((product, index) => (
          <SubTotal key={index}>
            <SubTotalText>SubTotal</SubTotalText>
            <SubTotalText style={{ textAlign: 'right' }}>${product.subtotal}</SubTotalText>
          </SubTotal>
        ))}
      </View>
    )
  }

  render() {
    if(this.props.cart.isLoading) {
      return (
        <View>
          <Spinner 
            visible={this.props.cart.isLoading}
            textContent={"Loading..."}
            animation="fade"
          />
        </View>
      )
    }

    return (
      <Container>
        <CartHeader>
          <CartHeaderLeft>
            <View style={{ flexDirection: 'row' }}>
              <HeaderText>{'You have '}</HeaderText>
              <HeaderTextBold>{this.props.cart.cart.length} {' items '}</HeaderTextBold>
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
          {this.renderCard()}
        </CartProduct>
        <CardPaymentTotal>
          {this.renderSubTotal()}
        </CardPaymentTotal>
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalText style={{ textAlign: 'right' }}>${this.props.cart.total}</TotalText>
        </TotalContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, { fetchCartItems })(cartlist)

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
