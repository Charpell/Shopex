import React, { Component } from 'react'
import styled from 'styled-components/native'

import LogoImage from '../../components/LogoImage'
import MenuButton from '../../components/MenuButton'
import SubHeader from '../../components/SubHeader'
import { headerStyle, colors, fonts } from '../../utils'

export default class home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <SubHeader title={'CUSTOMER SUPPORT'} />
        <Al>
          <ContactContainer>
            <ButtonContainer 
              onPress={() => this.props.navigation.navigate('ContactScreen')}
            >
              <ButtonRow>
                <ButtonText1>{'CONTACT'}</ButtonText1>
                <ButtonText2>{'Ask questions or get contact info'}</ButtonText2>
              </ButtonRow>
                <ButtonImageContainer>
                  <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
                </ButtonImageContainer>
            </ButtonContainer>

            <ButtonContainer 
              onPress={() => this.props.navigation.navigate('CustomerServiceScreen')}
            >
              <ButtonRow>
                <ButtonText1>{'Customer Service'}</ButtonText1>
                <ButtonText2>{'FAQ and company policies'}</ButtonText2>
              </ButtonRow>
                <ButtonImageContainer>
                  <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
                </ButtonImageContainer>
            </ButtonContainer>
          </ContactContainer>
        </Al>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundColor}
`
const Al = styled.View`
  margin-top: 50px
`
const ContactContainer = styled.View`
  /* flex-direction: column; */
`
const ButtonContainer = styled.TouchableOpacity`
  background: white;
  height: 70;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-top-width: 0.5;
  border-color: #BFBFBF;
  padding: 0px 15px;
  border-bottom-width: 0.5;
`
const ButtonRow = styled.View`
  
`
const ButtonText1 = styled.Text`
  font-size: 15;
  font-family: ${fonts.regularFont};
  color: ${colors.secondaryColor};
  font-weight: 400;
  text-align: left;
  margin-bottom: 2;
  /* margin-left: -120px */
`
const ButtonText2 = styled.Text`
  font-size: 13;
  font-family: ${fonts.regularFont};
  color: #999999;
  font-weight: 400;
  text-align: left;
`
const ButtonImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
const ButtonImage = styled.Image`
  margin-top: 5px;
  width: 16;
  height: 16;
  margin-bottom: 5px;
`