import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window')
import { colors, fonts } from '../utils'

export default class CarouselContainer extends Component {
   _renderItem({ item }, navigation ) {
    return (
      <Life key={item.title}>
        <ImageContainer>
          <SampleImage source={item.image} resizeMode={'contain'} />
        </ImageContainer>
        
        <BusinessButton onPress={() => { navigation.navigate('FashionDetailScreen', { item, navigation })}}>
          <BusinessText>{item.title}</BusinessText>
        </BusinessButton>
        
      </Life>
    )
  }

  render() {
    const { navigation, data } = this.props

    return (
      <Carousel 
        ref={(c) => { this._carousel = c; } }
        data={data}
        renderItem={item => this._renderItem(item, navigation)}
        sliderWidth={width}
        itemWidth={width - 80}
      />
    )
  }
}

const Life = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

const ImageContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`
const SampleImage = styled.Image`
  width: ${width - 80};
  height: 200;
  border-radius: 0
`

const BusinessButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 15;
  margin-bottom: 15;
`
const BusinessText = styled.Text`
  font-size: 30;
  color: white;
  font-family: ${fonts.anticFont};
  text-align: center;
`