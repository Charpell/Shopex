import React from 'react'
import styled from 'styled-components/native';
import { colors } from '../../utils'
import ImageSlider from 'react-native-image-slider'

const Slider = ({ images }) => {
  return (
    <ImageSlider 
      loopBothSides
      images={images}
      customSlide={({ index, item, style, width }) => (
        <CustomSlide key={index} style={style}>
          <CustomImage source={item.image} resizeMode={'contain'} />
        </CustomSlide>
      )}
      customButtons={(position, move) => (
        <CustomButtonContainer>
          {images.map((image, index) => {
            return (
              <CustomButton 
                key={index}
                underlayColor="#ccc"
                onPress={() => move(index)}
                style={position === index ? { backgroundColor: colors.primaryMoreColored } : {}}
              />
            )
          })}
        </CustomButtonContainer>
      )}
    />
  )
}

export default Slider

const CustomSlide = styled.View`
  padding: 15px;
  background: white;
`
const CustomImage = styled.Image`
  width: 100%;
  height: 80%;
`
const CustomButtonContainer = styled.View`
  top: -27.5%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`
const CustomButton = styled.Image`
  width: 8;
  height: 8;
  margin: 0px 5px;
  background: ${colors.backgroundColor};
  transform: rotate(45deg)
`