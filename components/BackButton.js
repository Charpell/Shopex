import React from 'react'
import styled from 'styled-components/native';

const BackButton = ({ navigation }) => {
  return (
    <Container
      onPress={() => navigation.goBack()}
    >
      <ButtonImage 
        source={require('../assets/images/icon-back.png')}
      />
    </Container>
  )
}

export default BackButton

const Container = styled.TouchableOpacity`
  width: 100;
  height: 20;
  align-items: flex-start;
  justify-content: center;
  padding-left: 15;
`
const ButtonImage = styled.Image`
  width: 10;
  height: 17;
`