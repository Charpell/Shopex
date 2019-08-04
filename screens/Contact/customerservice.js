import React, { Component } from 'react'
import styled from 'styled-components/native';

import BackButton from '../../components/BackButton';
import {fonts, colors, headerStyle, headerTitleStyle } from '../../utils';

export default class customerservice extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'CUSTOMER SERVICE',
    headerStyle,
    headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <ContactContainer>
          <ButtonContainer 
            onPress={() => this.props.navigation.navigate('ServiceScreen')}
          >
            <ButtonRow>
              <ButtonText1>{'Shopping at Storex'}</ButtonText1>
              <ButtonText2>{'Lorem ipsum dolor sit amet consecter adipisci…'}</ButtonText2>
            </ButtonRow>
              <ButtonImageContainer>
                <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
              </ButtonImageContainer>
          </ButtonContainer>

          <ButtonContainer 
            onPress={() => this.props.navigation.navigate('ServiceScreen')}
          >
            <ButtonRow>
              <ButtonText1>{'Payments & Sales Tax'}</ButtonText1>
              <ButtonText2>{'Lorem ipsum dolor sit amet consecter adipisci…'}</ButtonText2>
            </ButtonRow>
              <ButtonImageContainer>
                <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
              </ButtonImageContainer>
          </ButtonContainer>

          <ButtonContainer 
            onPress={() => this.props.navigation.navigate('ServiceScreen')}
          >
            <ButtonRow>
              <ButtonText1>{'Order Tracking'}</ButtonText1>
              <ButtonText2>{'Lorem ipsum dolor sit amet consecter adipisci…'}</ButtonText2>
            </ButtonRow>
              <ButtonImageContainer>
                <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
              </ButtonImageContainer>
          </ButtonContainer>

          <ButtonContainer 
            onPress={() => this.props.navigation.navigate('ServiceScreen')}
          >
            <ButtonRow>
              <ButtonText1>{'Returns of online purchases'}</ButtonText1>
              <ButtonText2>{'Lorem ipsum dolor sit amet consecter adipisci…'}</ButtonText2>
            </ButtonRow>
              <ButtonImageContainer>
                <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
              </ButtonImageContainer>
          </ButtonContainer>

          <ButtonContainer 
            onPress={() => this.props.navigation.navigate('ServiceScreen')}
          >
            <ButtonRow>
              <ButtonText1>{'Return of store purchases'}</ButtonText1>
              <ButtonText2>{'Lorem ipsum dolor sit amet consecter adipisci…'}</ButtonText2>
            </ButtonRow>
              <ButtonImageContainer>
                <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
              </ButtonImageContainer>
          </ButtonContainer>

          <ButtonContainer 
            onPress={() => this.props.navigation.navigate('ServiceScreen')}
          >
            <ButtonRow>
              <ButtonText1>{'Recalled Items'}</ButtonText1>
              <ButtonText2>{'Lorem ipsum dolor sit amet consecter adipisci…'}</ButtonText2>
            </ButtonRow>
              <ButtonImageContainer>
                <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
              </ButtonImageContainer>
          </ButtonContainer>

          <ButtonContainer 
            onPress={() => this.props.navigation.navigate('ServiceScreen')}
          >
            <ButtonRow>
              <ButtonText1>{'Our Responsibility'}</ButtonText1>
              <ButtonText2>{'Lorem ipsum dolor sit amet consecter adipisci…'}</ButtonText2>
            </ButtonRow>
              <ButtonImageContainer>
                <ButtonImage resizeMode={'contain'} source={require('../../assets/images/icon-next.png')} />
              </ButtonImageContainer>
          </ButtonContainer>
        </ContactContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: white;
`
const ContactContainer = styled.View`
  flex-direction: column;
`
const ButtonContainer = styled.TouchableOpacity`
  background: white;
  height: 70;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-top-width: 0.5;
  border-color: #BFBFBF;
  padding: 20px 15px;
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
