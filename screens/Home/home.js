import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components'

import TitleLogo from '../../components/LogoImage';
import MenuButton from '../../components/MenuButton';
import { fonts, colors, headerStyle } from '../../utils';
import { categories } from '../../data/home';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <TitleLogo />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
        <FlashTexts>
          <PrimaryText>LAST CHANCE!</PrimaryText>
          <SecondaryText>Holiday shipping ends soon.</SecondaryText>
          <PrimaryBoldText>SHOP NOW</PrimaryBoldText>
        </FlashTexts>
        
        <ScrollView>
          {categories.map((cat, index) => (
            <CategoryContainer key={index}>
              <CategoryButton 
                style={{ backgroundColor: cat.backgroundColor }} 
                onPress={this.props.navigation.navigate(cat.screen)}
                activeOpacity={0.9}
                >
                <BigText>{cat.text}</BigText>
                <SmallText>{cat.subtext}</SmallText>
              </CategoryButton>
            </CategoryContainer>
          ))}
        </ScrollView>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background: #FFFFFF;
  flex-direction: column
`
const FlashTexts = styled.View`
  background: ${colors.secondaryColor};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 40;
`
const PrimaryText = styled.Text`
  font-family: ${fonts.regularFont};
  color: ${colors.primaryColor};
  font-size: 12
`
const SecondaryText = styled.Text`
  font-family: ${fonts.regularFont};
  color: white;
  font-size: 12;
  margin-left: 2;
`
const PrimaryBoldText = styled.Text`
  font-family: ${fonts.boldFont};
  color: ${colors.primaryMoreColored};
  font-size: 12;
  margin-left: 5;
`
const CategoryContainer = styled.View`
  width: 100%;
  height: 92;
  align-items: center;
  justify-content: center;
`
const CategoryButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
`
const BigText = styled.Text`
  font-family: ${fonts.extraLightFont};
  color: white;
  text-align: center;
  margin-bottom: 2;
  font-size: 50;
  line-height: 50;
  position: absolute;
  top: 16
`
const SmallText = styled.Text`
  font-family: ${fonts.extraLightFont};
  color: white;
  font-size: 20.5;
  text-align: center;
  position: absolute;
  bottom: 9
`