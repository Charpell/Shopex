import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components';

const cartempty = () => {
  return (
    <Container>
      <BodyContainer>
        <EmptyImage 
          source={require('../../assets/images/icon-bag-empty.png')}
        />
        <BagText>{'You have no items in your'}</BagText>
        <BagText>{'shopping bag.'}</BagText>
      </BodyContainer>
    </Container>
  )
}

export default cartempty

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`
const BodyContainer = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  height: 150;
  background: #F2F2F2;
  border-radius: 4;
  border-width: 2;
  border-style: dotted;
  border-color: #C7C7C7
`
const EmptyImage = styled.Image`
  width: 25;
  height: 25;
  margin-bottom: 10px;
`
const BagText = styled.Text`
`