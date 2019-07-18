import React, { Component } from 'react'
import styled from 'styled-components';

export default class LandingScreen extends Component {
    constructor(props) {
        super(props)
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