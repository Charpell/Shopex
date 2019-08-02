import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Switch } from 'react-native-switch';
import styled from 'styled-components';

import LogoImage from '../../components/LogoImage';
import BackButton from '../../components/BackButton';
import BagHeader from '../../components/BagHeader';
import { fonts, colors, headerStyle } from '../../utils';


export default class payment extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <BackButton navigation={navigation} />,
  })
  
  state = {
    isAgreed: true
  }

  completePayment = () => {
    this.props.navigation.navigate('Complete')
  }

  render() {
    return (
      <Container>
        <BagHeader current={1} />
        
        <PageContent>
          <CardOptions>
            <CardContainer>
              <CardImage resizeMode={'contain'} source={require('../../assets/images/icon-paypal.png')} />
            </CardContainer>
            <CardContainer style={{ borderColor: colors.primaryMoreColored }}>
              <CardImage source={require('../../assets/images/icon-visa.png')} />
            </CardContainer>
          </CardOptions>

          <CardDetails>
            <View>
              <CardTitle>{'CARD DETAILS'}</CardTitle>
            </View>
            <View>
              <CardSubTitle>{'Enter your debit or credit card details.'}</CardSubTitle>
            </View>
            <CardForm>
              <CardInputRow>
                <CardLabel>{'Card No:'}</CardLabel>
                <CardInput>{'4561 4939 7322 3821'}</CardInput>
              </CardInputRow>
              <CardInputRow>
                <CardLabel>{'Expiry:'}</CardLabel>
                <CardInput>{'12/15'}</CardInput>
              </CardInputRow>
              <CardInputRow>
                <CardLabel>{'CVC Code:'}</CardLabel>
                <CardInput>{'123'}</CardInput>
              </CardInputRow>
            </CardForm>
          </CardDetails>
        </PageContent>
        
        <SaveButtonContainer>
          <SaveButton
            onPress={() => this.completePayment()}
          >
            <SaveText>{'PAY NOW'}</SaveText>
          </SaveButton>
        </SaveButtonContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background: white;
`
const PageContent = styled.View`
  margin-top: 20px;
`
const CardOptions = styled.View`
  flex-direction: row;
  margin-top: 15px;
`
const CardContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  border-color: #BFBFBF;
  border-width: 0.7;
  border-radius: 4;
  height: 44;
  margin-left: 10px;
  margin-right: 10px;
`
const CardImage = styled.Image`
  width: 33;
  height: 33
`
const CardDetails = styled.View`
  margin-top: 10px;
  padding: 15px
`
const CardTitle = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 14;
  color: ${colors.secondaryColor}
`
const CardSubTitle = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 14;
  color: ${colors.greyColor};
`
const CardForm = styled.View`
  margin-top: 10px;
  border-color: #BFBFBF;
  border-width: 0.5;
  border-radius: 4;
  background: ${colors.backgroundColor}
`
const CardInputRow = styled.View`
  flex-direction: row;
  border-bottom-color: #BFBFBF;
  border-bottom-width: 0.5;
  padding-bottom: 0.5px;
`
const CardLabel = styled.Text`
  flex: 0.3;
  padding: 15px;
`
const CardInput = styled.TextInput`
  flex: 0.7;
  padding: 15px;
  background: white;
  border-radius: 4;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
const SaveButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%
`
const SaveButton = styled.TouchableOpacity`
  background: #FFDEAD;
  justify-content: flex-start;
  align-items: center;
  height: 80;
  padding-top: 20px
`
const SaveText = styled.Text`
  color: white;
  font-family: ${fonts.boldFont};
  font-size: 15;
  letter-spacing: 3;
  text-align: center;
  font-weight: 600;
`