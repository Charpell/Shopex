import React, { Component } from 'react'
import { SafeAreaView, ScrollView, AsyncStorage } from 'react-native'
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import { logOut } from '../store/actions/authAction';
import { fonts, colors } from '../utils';

export class SideBar extends Component {
  handleLogout = () => {
    AsyncStorage.clear()
      .then(() => {
        this.props.logOut()
        this.props.navigation.navigate('LoginScreen')
      })
  }

  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TopNavigation>
              <TopMenu>
                <LeftIcon
                  onPress={() => this.props.navigation.navigate('HomeScreen')}
                >
                  <IconContainer>
                    <IconImage 
                      source={require('../assets/images/icon-nav-shop.png')}
                      resizeMode={'contain'}
                    />
                    <IconText>Shop</IconText>
                  </IconContainer>
                </LeftIcon>
                <RightIcon
                  onPress={() => this.props.navigation.navigate('CartListScreen')}
                >
                <IconContainer>
                    <IconImage 
                      source={require('../assets/images/icon-nav-bag.png')}
                      resizeMode={'contain'}
                    />
                    <IconText>Bag</IconText>
                    {
                      this.props.cart.cart.length > 0 && 
                      (<BadgeContainer>
                        <BadgeText>{this.props.cart.cart.length}</BadgeText>
                      </BadgeContainer>)
                    }
                  </IconContainer>
                </RightIcon>
              </TopMenu>
              <BottomMenu>
                <LeftIcon
                  onPress={() => this.props.navigation.navigate('InspirationHome')}
                >
                  <IconContainer>
                    <IconImage 
                      source={require('../assets/images/icon-nav-inspiration.png')}
                      resizeMode={'contain'}
                    />
                    <IconText>Inspiration</IconText>
                  </IconContainer>
                </LeftIcon>
                <RightIcon>
                <IconContainer>
                    <IconImage 
                      source={require('../assets/images/icon-nav-stores.png')}
                      resizeMode={'contain'}
                    />
                    <IconText>Stores</IconText>
                  </IconContainer>
                </RightIcon>
              </BottomMenu>
            </TopNavigation>

            <MainNavigation>
              <MenuSquareContainer>
                <MenuSquare />
              </MenuSquareContainer>
              <NavButton>
                <NavButtonText>My Account</NavButtonText>
              </NavButton>
              <NavButton>
                <NavButtonText>Customer Support</NavButtonText>
              </NavButton>
              <NavButton onPress={() => this.handleLogout()}>
                <NavButtonText style={{ color: colors.primaryColor }}>Log out</NavButtonText>
              </NavButton>
            </MainNavigation>

            <Footer>
              <FooterTitle>Follow Us</FooterTitle>
              <FooterLinksContainer>
                <FooterLink>
                  <LinkImage source={require('../assets/images/facefooter.png')} resizeMode={'contain'} />
                </FooterLink>
                <FooterLink>
                  <LinkImage source={require('../assets/images/twiitterfooter.png')} resizeMode={'contain'} />
                </FooterLink>
                <FooterLink>
                  <LinkImage source={require('../assets/images/pinfooter.png')} resizeMode={'contain'} />
                </FooterLink>
              </FooterLinksContainer>
            </Footer>
          </ScrollView>
        </SafeAreaView>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, { logOut })(withNavigation(SideBar))

const Container = styled.View`
  flex: 1;
  background: #2F2F2F
`

const TopNavigation = styled.View`
  background: #2F2F2F
`
const TopMenu = styled.View`
  flex-direction: row;
  border-bottom-color: #585858;
  border-bottom-width: 0.4;
  border-top-color: #585858;
  border-top-width: 0.4;
`
const BottomMenu = styled.View`
  flex-direction: row;
  border-bottom-color: #585858;
  border-bottom-width: 0.4;
`
const LeftIcon = styled.TouchableOpacity`
  flex: 0.5;
  height: 130;
  justify-content: center;
  align-items: center;
  border-right-color: #585858;
  border-right-width: 0.4;
`
const RightIcon = styled.TouchableOpacity`
  flex: 0.5;
  height: 130;
  justify-content: center;
  align-items: center;
`
const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`
const IconImage = styled.Image`
  width: 25;
  height: 25;
  margin-bottom: 5
`
const IconText = styled.Text`
  font-family: ${fonts.lightFont};
  font-size: 15;
  color: white;
  text-align: center;
`
const BadgeContainer = styled.View`
  width: 15;
  height: 15;
  border-radius: 15;
  border-color: ${colors.secondaryColor};
  border-width: 1;
  position: absolute;
  background: ${colors.primaryColor};
  top: -2;
  right: -8
`
const BadgeText = styled.Text`
  font-family: ${fonts.boldFont};
  font-size: 10;
  color: ${colors.secondaryColor};
  text-align: center;
`
const MainNavigation = styled.View`
  justify-content: center;
`
const MenuSquareContainer = styled.View`
  align-items: center;
`
const MenuSquare = styled.View`
  width: 10.5;
  height: 10.5;
  background: ${colors.secondaryColor};
  position: absolute;
  top: -6;
  transform: rotate(45deg)
`
const NavButton = styled.TouchableOpacity`
  height: 70;
  align-items: center;
  justify-content: center;
  border-bottom-color: #585858;
  border-bottom-width: 0.4
`
const NavButtonText = styled.Text`
  font-family: ${fonts.lightFont};
  color: white;
  font-size: 15
`
const Footer = styled.View`
  padding: 20px 0px;
`
const FooterTitle = styled.Text`
  font-family: ${fonts.boldFont};
  color: #7E7E7E;
  font-size: 15px;
  text-transform: uppercase;
  padding: 15px;
  text-align: center;
`
const FooterLinksContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`
const FooterLink = styled.View`
  flex: 0.3
`
const LinkImage = styled.Image`
  width: 66;
  height: 66;
`