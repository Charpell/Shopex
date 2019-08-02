import React from 'react'
import styled from 'styled-components';

const ConfirmEdit = ({ navigation }) => {
  return (
    <Container
      onPress={() => navigation.goBack()}
    >
      <ButtonImage 
        source={require('../assets/images/icon-check.png')}
      />
    </Container>
  )
}

export default ConfirmEdit

const Container = styled.TouchableOpacity`
  width: 100;
  height: 20;
  align-items: flex-end;
  justify-content: center;
  padding-right: 15;
`
const ButtonImage = styled.Image`
  width: 17;
  height: 17;
`