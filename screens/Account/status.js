import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import styled from 'styled-components/native';

import BackButton from '../../components/BackButton';
import { colors, fonts, headerStyle, headerTitleStyle } from '../../utils';

export default class status extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ORDER STATUS',
    headerStyle,
    headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />

})

  render() {
    return (
      <Container>
        <ScrollView
          style={{ paddingBottom: 20 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={styles.orderContainer}
          >
            <OrderHeader>
              <OrderInfo>
                <TextLabel>Order ID</TextLabel>
                <TextValue>c945387433</TextValue>
              </OrderInfo>
              <OrderInfo style={{ backgroundColor: '#E7E7E7' }}>
                <TextLabel>Amount</TextLabel>
                <TextValue>$2391.00</TextValue>
              </OrderInfo>
              <OrderInfo>
                <TextLabel>Items</TextLabel>
                <TextValue>4</TextValue>
              </OrderInfo>
            </OrderHeader>
            <OrderBody>
              <OrderDateContainer>
                <OrderDate>
                  {'Placed on Wednesday, December 30, 2014 at 09:32 am'}
                </OrderDate>
              </OrderDateContainer>
              <OrderProgressContainer>
                <OrderProgressTitles>
                  <OrderProgressText>{'ORDER PLACED'}</OrderProgressText>
                  <OrderProgressText>{'QUALITY CHECK'}</OrderProgressText>
                  <OrderProgressText>{'CARRYOUT'}</OrderProgressText>
                </OrderProgressTitles>
                <ProgressContainer>
                  <ProgressFill style={{ backgroundColor: colors.primaryMoreColored }}>
                    <ProgressSquareFill style={{ backgroundColor: colors.primaryMoreColored }} ></ProgressSquareFill>
                  </ProgressFill>
                  <ProgressFill style={{ backgroundColor: colors.primaryMoreColored }}>
                    <ProgressSquareFill style={{ backgroundColor: colors.primaryMoreColored }}></ProgressSquareFill>
                  </ProgressFill>
                  <ProgressFill>
                    <ProgressSquareFill></ProgressSquareFill>
                  </ProgressFill>
                </ProgressContainer>
              </OrderProgressContainer>
            </OrderBody>
            <OrderFooter>
              <OrderFooterContainer>
                <OrderStatusImage 
                  resizeMode={'contain'} 
                  source={require('../../assets/images/icon-pending-black.png')} 
                />
                <OrderStatusText>In Progress</OrderStatusText>
              </OrderFooterContainer>
              <OrderFooterContainer
                style={{ justifyContent: 'flex-end' }}
              >
                <ButtonContainer>
                  <ButtonText>{'VIEW DETAIL'}</ButtonText>
                </ButtonContainer>
              </OrderFooterContainer>
            </OrderFooter>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: white
`

const OrderHeader = styled.View`
  height: 65;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 15px;
`
const OrderInfo = styled.View`
  padding: 15px;
`
const TextLabel = styled.Text`
  font-size: 13;
  font-family: ${fonts.boldFont};
  color: ${colors.secondaryColor};
  text-align: center;
  margin-bottom: 3px;
`
const TextValue = styled.Text`
  font-size: 15;
  font-family: ${fonts.regularFont};
  color: #999999;
  text-align: center;
`
const OrderBody = styled.View`
  margin: 0px 15px;
  background: white;
`
const OrderDateContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  padding: 0px 30px;
  padding-top: 15px;
`
const OrderDate = styled.Text`
  font-size: 15;
  font-family: ${fonts.regularFont};
  color: ${colors.secondaryColor};
  text-align: center;
`
const OrderProgressContainer = styled.View`
  margin: 15px 0px;
`
const OrderProgressTitles = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const OrderProgressText = styled.Text`
  padding: 0px 15px;
  width: 33%;
  text-align: center;
  align-self: center;
  font-size: 15;
  font-family: ${fonts.regularFont};
  color: ${colors.secondaryColor};
`
const ProgressContainer = styled.View`
  flex-direction: row;
  padding: 15px 0px;
`
const ProgressFill = styled.View`
  width: 33%;
  height: 1.5;
  background: #EAEAEA;
`
const ProgressSquareFill = styled.View`
  width: 10.5;
  height: 10.5;
  left: 45%;
  background: #EAEAEA;
  transform: rotate(45deg);
  top: -4.5
`
const OrderFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  padding-right: 0px;
`
const OrderFooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
const OrderStatusImage = styled.Image`
  width: 14;
  height: 14;
`
const OrderStatusText = styled.Text`
  font-size: 12;
  font-family: ${fonts.regularFont};
  color: ${colors.secondaryColor};
  padding-left: 8px;
`
const ButtonContainer = styled.TouchableOpacity`
  background: ${colors.secondaryColor};
  justify-content: center;
  align-items: center;
  height: 40;
  margin: 0px 15px;
  border-radius: 4;
  width: 110;
`
const ButtonText = styled.Text`
  color: white;
  font-family: ${fonts.regularFont};
  font-size: 14;
  font-weight: 400;
`

const styles = StyleSheet.create({
  orderContainer: {
    position: 'relative',
    margin: 15,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 1.5,
    elevation: 0.5,
    borderRadius: 3,
    backgroundColor: colors.backgroundColor,
  }
})