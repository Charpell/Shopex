import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux';

import TitleLogo from '../../components/LogoImage';
import MenuButton from '../../components/MenuButton';
import { fonts, colors, headerStyle } from '../../utils';
import { categories } from '../../data/home';
import { retrieveState } from '../../helpers/AsyncStorage';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <TitleLogo />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  render() {
    // console.log('props', this.props)
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
                onPress={() => this.props.navigation.navigate(cat.screen)}
                activeOpacity={0.9}
                >
                <BigText>{cat.text}</BigText>
                <SmallText>{cat.subtext}</SmallText>
              </CategoryButton>
            </CategoryContainer>
          ))}
          <OfferContainer 
            onPress={() => this.props.navigation.navigate('CategoryScreen')}
            activeOpacity={0.9}
          >
            <TitleContainer>
              <MainText>WINTER SALE</MainText>
              <SubText>UP TO 60% OFF</SubText>
            </TitleContainer>
            <ImageBackgroundContainer resizeMode={'cover'} source={require('../../assets/images/emptyback.png')}>
              <OverlayOfferImage></OverlayOfferImage>
              <TagContainer>
                <TagText>{'SHOP NOW'}</TagText>
              </TagContainer>
            </ImageBackgroundContainer>
          </OfferContainer>
        </ScrollView>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(HomeScreen)

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
const ImageBackgroundContainer = styled.ImageBackground`
  height: 200;
  width: 100%;
  top: -40;
`
const OfferContainer = styled.TouchableOpacity`
  margin-top: 100px;
`
const TitleContainer = styled.View`
  align-items: center;
  top: -30;
  z-index: 1;
`
const MainText = styled.Text`
  font-family: ${fonts.boldFont};
  color: ${colors.secondaryColor};
  font-size: 12;
  text-align: center;
  letter-spacing: 3;
`
const SubText = styled.Text`
  font-family: ${fonts.lightFont};
  color: ${colors.secondaryColor};
  font-size: 24;
  text-align: center;
`
const OverlayOfferImage = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2)
`
const TagContainer = styled.View`
  width: 105;
  height: 34;
  justify-content: center;
  align-content: center;
  position: absolute;
  right: 0;
  top: 100;
  background: ${colors.primaryMoreColored}
`
const TagText = styled.Text`
  color: white;
  font-size: 12;
  font-family: ${fonts.boldFont};
  letter-spacing: 3;
  text-align: center;
`
