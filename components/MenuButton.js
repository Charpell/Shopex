import React from 'react'
import styled from 'styled-components/native'

const MenuButton = (props) => {
  return (
    <Container onPress={() => props.navigation.openDrawer()} >
      <LogoImage source={require('../assets/images/icon-nav.png')} />
    </Container>
  )
}

export default MenuButton

const Container = styled.TouchableOpacity`
  width: 60px;
  padding-left: 15px;
  justify-content: center;
`
const LogoImage = styled.Image`
  width: 19px;
  height: 17px;
`
