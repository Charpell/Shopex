import React from 'react'
import styled from 'styled-components/native';

const HomeButton = ({ navigation }) => {
  return (
    <Container
      onPress={() => navigation.navigate('HomeScreen')}
    >
      <ButtonImage 
        source={require('../assets/images/icon-back.png')}
      />
    </Container>
  )
}

export default HomeButton

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