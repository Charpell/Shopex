import React, { Component } from 'react'
import styled from 'styled-components/native'

import BackButton from '../../components/BackButton'
import { headerStyle, headerTitleStyle , colors, fonts} from '../../utils';

export default class home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'CONTACT',
    headerStyle,
    headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />

})

  render() {
    return (
      <Container>
        <ContactImageContainer>
          <ContactBackground>
            <ContactImage />
            <ContactText>{'855-555-555'}</ContactText>
          </ContactBackground>
        </ContactImageContainer>
        
        <ButtonRow>
          <ButtonContainer
            onPress={() => {}}
          >
            <LeftColumnContainer>
              <LeftText>{'Address:'}</LeftText>
            </LeftColumnContainer>
            <RightColumnContainer>
              <RightText>{'45 Grand Central Terminal New York, NY 10017'}</RightText>
            </RightColumnContainer>
          </ButtonContainer>
        </ButtonRow>

        <ButtonRow>
          <ButtonContainer
            onPress={() => {}}
          >
            <LeftColumnContainer>
              <LeftText>{'Email:'}</LeftText>
            </LeftColumnContainer>
            <RightColumnContainer>
              <RightText>{'info@storexapp'}</RightText>
            </RightColumnContainer>
          </ButtonContainer>
        </ButtonRow>
        
        <Footer>
          <FooterButton
            onPress={() => { this.props.navigation.navigate('QuestionScreen')}}
          >
            <FooterText>{'SEND A QUESTION'}</FooterText>
          </FooterButton>
        </Footer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: white;
`
const ContactImageContainer = styled.TouchableOpacity`
  align-self: center;
  width: 200;
  height: 200;
  justify-content: center;
  align-items: center;
`
const ContactBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const ContactImage = styled.Image`
  width: 30;
  height: 30;
  margin-bottom: 10;
  margin-left: -5;
`
const ContactText = styled.Text`
  color: white;
  font-size: 18;
  font-family: ${fonts.regularFont}
`
const ButtonRow = styled.View`
  
`
const ButtonContainer = styled.TouchableOpacity`
  background: white;
  height: 70;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-top-width: 0.5;
  border-color: #BFBFBF;
  padding: 0px 15px;
  border-bottom-width: 0.5;
`
const LeftColumnContainer = styled.View`
  justify-content: center;
  align-items: center;
`
const LeftText = styled.Text`
  font-size: 15;
  font-family: ${fonts.regularFont};
  color: ${colors.secondaryColor};
  font-weight: 400;
  text-align: left;
  margin-bottom: 2;
`
const RightColumnContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
`
const RightText = styled.Text`
  font-size: 13;
  font-family: ${fonts.regularFont};
  color: #999999;
  font-weight: 400;
  text-align: left;
`
const Footer = styled.View`
  /* border: #bfbfbf;
  border-top-width: 1; */
  padding-top: 30;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const FooterButton = styled.TouchableOpacity`
  background: ${colors.secondaryColor};
  margin: 20px;
  justify-content: center;
  align-items: center;
  height: 30;
  width: 210;
`
const FooterText = styled.Text`
  color: white;
  font-family: ${fonts.boldFont};
  font-size: 13;
  letter-spacing: 3;
  text-align: center;
  font-weight: 600;
`