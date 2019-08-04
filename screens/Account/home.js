import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import LogoImage from '../../components/LogoImage';
import MenuButton from '../../components/MenuButton';
import SubHeader from '../../components/SubHeader';
import { colors, fonts, headerStyle } from '../../utils';

export default class home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <SubHeader title={'MY ACCOUNT'} />
        
        <OrderContainer>
          <ProgressButton
            onPress={this.props.navigation.navigate('OrderStatusScreen')}
          >
            <ProgressImage 
              resizeMode={'contain'}
              source={require('../../assets/images/icon-pending.png')}
            />
            <ProgressText>1 {'Order in Progress'}</ProgressText>
          </ProgressButton>
          <OrderInfo>
            <OrderInfoText>Last Order: 30.12.2014</OrderInfoText>
            <OrderInfoText>ID: c945387433</OrderInfoText>
          </OrderInfo>
          <Body>
            <BodyInfoButton>
              <LeftView>
                <LeftImage 
                  resizeMode={'contain'}
                  source={require('../../assets/images/icon-paymentinfo.png')}
                />
                <LeftText>{'Payment Information'}</LeftText>
              </LeftView>
              <RightView>
                <RightImage 
                  resizeMode={'contain'}
                  source={require('../../assets/images/icon-next.png')}
                />
              </RightView>
            </BodyInfoButton>
            <BodyInfoButton style={{ borderBottomWidth: 0.5 }}>
              <LeftView>
                <LeftImage 
                  resizeMode={'contain'}
                  source={require('../../assets/images/icon-settings.png')}
                />
                <LeftText>{'Settings'}</LeftText>
              </LeftView>
              <RightView>
                <RightImage 
                  resizeMode={'contain'}
                  source={require('../../assets/images/icon-next.png')}
                />
              </RightView>
            </BodyInfoButton>
          </Body>
        </OrderContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundColor}
`
const OrderContainer = styled.View`
  height: 150;
  width: 100%;
  padding-top: 20px;
`
const ProgressButton = styled.TouchableOpacity`
  background: ${colors.secondaryColor};
  height: 55;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 4;
`
const ProgressImage = styled.Image`
  margin-top: 5;
  width: 12;
  height: 12;
  margin-bottom: 5;
`
const ProgressText = styled.Text`
  font-size: 14;
  font-family: ${fonts.regularFont};
  color: white;
  font-weight: 400;
`
const OrderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
`
const OrderInfoText = styled.Text`
  font-size: 13;
  font-family: ${fonts.regularFont};
  color: #999999;
`
const Body = styled.View`
  flex-direction: column;
`
const BodyInfoButton = styled.TouchableOpacity`
  background: white;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  height: 70;
  flex-direction: row;
  border-top-width: 0.5;
  border-color: #BFBFBF;
  padding-left: 15px;
  padding-right: 15px
`
const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const LeftImage = styled.Image`
  margin-top: 5px;
  width: 16;
  height: 16;
  margin-bottom: 5px
`
const LeftText = styled.Text`
  font-size: 15;
  font-family: ${fonts.regularFont};
  color: ${colors.secondaryColor};
  font-weight: 400;
  padding-left: 15;
`
const RightView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
const RightImage = styled.Image`
  margin-top: 5px;
  width: 16;
  height: 16;
  margin-bottom: 5;
`