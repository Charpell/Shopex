import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';

import LogoImage from '../../components/LogoImage';
import BackButton from '../../components/BackButton'
import ConfirmEdit from '../../components/ConfirmEdit'
import ProductEditItem from '../../components/ProductEditItem';
import SizeFilter from '../../components/filters/Sizes';
import ColorsFilter from '../../components/filters/Colors';
import { colorData, sizeData } from '../../data/home';
import { colors, fonts, headerStyle } from '../../utils';

export default class cartedit extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: <ConfirmEdit navigation={navigation} />
  })

  colorFilter = () => (
    <FilterView>
      <FilterLabel>{'COLOR'}</FilterLabel>
      <FilterContainer>
        {colorData.map((color, index) => (
          <ColorsFilter color={color} key={'color' + index} />
        ))}
      </FilterContainer>
    </FilterView>
  )

  sizeFilter = () => (
    <FilterView>
      <FilterLabel>{'SIZE'}</FilterLabel>
      <FilterContainer>
        {sizeData.map((size, index) => (
          <SizeFilter size={size} key={'size' + index} />
        ))}
      </FilterContainer>
    </FilterView>
  )

  render() {
    const product = this.props.navigation.getParam('products') || {};

    return (
      <Container>
        <TitleContainer>
          <TitleText>{'EDIT ITEM'}</TitleText>
        </TitleContainer>
        <EditItemContainer>
          <SeperatorSquareContainer>
            <SeperatorSquare></SeperatorSquare>
          </SeperatorSquareContainer>
          <ProductEditItem navigation={this.props.navigation} key={'product'} products={product} />
        </EditItemContainer>
        <View>
          {this.sizeFilter()}
          {this.colorFilter()}
        </View>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background: ${colors.backgroundColor};
  flex-direction: column;
`
const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 60;
  background: #FFF
`
const TitleText = styled.Text`
  font-family: ${fonts.boldFont};
  font-size: 12;
  color: ${colors.secondaryColor};
  letter-spacing: 3;
`
const EditItemContainer = styled.View`
  margin-top: 0px;
  width: 100%;
  height: 90;
  background: #FFF;
  border-top-width: 0.5;
  border-top-color: #BFBFBF
`
const SeperatorSquareContainer = styled.View`
  align-items: center;
  width: 100%
`
const SeperatorSquare = styled.View`
  width: 6;
  height: 6;
  background: ${colors.primaryMoreColored};
  transform: rotate(45deg);
  position: absolute;
  top: -2.5
`
const FilterView = styled.View`
  padding: 15px
`
const FilterLabel = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 15;
  color: ${colors.secondaryColor};
`
const FilterContainer = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 10px;
`
