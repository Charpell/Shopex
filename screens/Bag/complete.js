import React, { Component } from 'react'
import styled from 'styled-components/native';

import LogoImage from '../../components/LogoImage';
import BackButton from '../../components/BackButton';
import BagHeader from '../../components/BagHeader';
import { fonts, colors, headerStyle } from '../../utils';


export default class complete extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <BackButton navigation={navigation} />,
  })

  render() {
    return (
      <Container>
        <BagHeader current={2} />

        <PageContent>
          <Wrapper>
            <IconContainer>
              <IconImage resizeMode={'contain'} source={require('../../assets/images/icon-check-white.png')} />
            </IconContainer>
          </Wrapper>
          <ThankYouContainer>
            <ThankYouText>Thank You</ThankYouText>
          </ThankYouContainer>
          <DescriptionContainer>
            <DescriptionText>We’ve sent you an email with all the details of your order. You can track your shipment with the order id below.</DescriptionText>
          </DescriptionContainer>
          <OrderNumberContainer>
            <OrderNumberText>c945387490</OrderNumberText>
          </OrderNumberContainer>
        </PageContent>

        <BackToShopContainer>
          <ButtonContainer
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <ButtonText>{'BACK TO SHOP'}</ButtonText>
          </ButtonContainer>
        </BackToShopContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background: white;
  padding-top: 20px
`
const PageContent = styled.View`
  margin-top: 20px;
`
const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`
const IconContainer = styled.View`
  width: 52;
  height: 52;
  border-radius: 52;
  background: ${colors.primaryMoreColored};
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
const IconImage = styled.Image`
  width: 25;
  height: 25;
`
const ThankYouContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
`
const ThankYouText = styled.Text`
  font-family: ${fonts.lightFont};
  font-size: 32;
  color: ${colors.secondaryColor}
`
const DescriptionContainer = styled.View`
  padding: 0px 45px;
`
const DescriptionText = styled.Text`
  font-family: ${fonts.lightFont};
  font-size: 15;
  color: ${colors.secondaryColor};
  text-align: center;
`
const OrderNumberContainer = styled.View`
  margin: 30px;
  background: ${colors.backgroundColor};
  height: 50;
  border-color: #BFBFBF;
  border-width: 0.5;
  border-radius: 4;
  align-items: center;
  justify-content: center;
`
const OrderNumberText = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 20;
  color: ${colors.secondaryColor};
  text-align: center;
`
const BackToShopContainer = styled.View`
  background: ${colors.backgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-width: 0.5;
  border-top-color: #BFBFBF
`
const ButtonContainer = styled.TouchableOpacity`
  background: ${colors.secondaryColor};
  margin: 20px;
  justify-content: center;
  align-items: center;
  width: 170;
  height: 30
`
const ButtonText = styled.Text`
  color: white;
  font-family: ${fonts.boldFont};
  font-size: 13;
  letter-spacing: 3;
  text-align: center;
  font-weight: 600
`