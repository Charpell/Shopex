import React from 'react'
import { Image } from 'react-native'

const LogoImage = () => {
  return (
    <Image 
      style={{ width: 51, height: 28 }}
      source={require('../assets/images/logo.png')}
    />
  )
}

export default LogoImage
