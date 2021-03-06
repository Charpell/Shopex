import React, { Component } from 'react'
import styled from 'styled-components/native';
import { retrieveState } from '../helpers/AsyncStorage';

export default class LandingScreen extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
      let response = await retrieveState()
      try {
        if (response) {
          this.props.navigation.navigate('HomeScreen')
        } else {
          this.props.navigation.navigate('LoginScreen')
        }
      } catch(error) {}
    }

    render() {
        return (
            <Container>
                <Logo
                  source={require('../assets/images/logo.png')}
                />
            </Container>
        )
    }

}

const Container = styled.View`
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
`

const Logo = styled.Image`
  width: 84px;
  height: 45px;
`