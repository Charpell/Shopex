import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components';

import { fonts, colors, headerStyle, headerTitleStyle } from '../../utils';

export default class LoginScreen extends Component {
  static navigationOptions = () => ({
    title: "SIGN IN",
    headerStyle,
    headerTitleStyle
  })

  render() {
    return (
      <Container>
        <Logo source={require('../../assets/images/logo.png')} />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
        />
        <IconEmail source={require('../../assets/images/icon-mail.png')} />
        <IconPassword source={require('../../assets/images/icon-password.png')} />
        <TouchableOpacity >
          <Button>
            <ButtonText>Log In</ButtonText>
          </Button>
        </TouchableOpacity>
      </Container>
    )
  }
}

const Container = styled.View`
  position: absolute;
  top: -80;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const Logo = styled.Image`
  width: 100px;
  height: 44px;
  margin-top: 50px;
`

const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 335px;
  left: 51px;
`;
const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 395px;
  left: 51px;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;
const Button = styled.View`
  background: ${colors.primaryColor};
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #EFB961;
  margin-top: 40px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;