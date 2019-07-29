import React, { Component } from 'react'
import { Animated, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native'
import styled from 'styled-components';
import { Icon } from 'expo';
import { connect } from 'react-redux';

import { closeFilterMenu } from '../../store/actions/componentAction';
import FilterComponent from './filter';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

var cardWidth = screenWidth;
if (screenWidth > 500) {
  cardWidth = 500;
}

function mapStateToProps(state) {
  return { menuState: state.component }
}

class Modal extends Component {
  state = {
    top: new Animated.Value(screenHeight)
  };
  
  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.menuState.filterMenu) {
      Animated.spring(this.state.top, {
        toValue: 10
      }).start()
    }
    
    if (!this.props.menuState.filterMenu) {
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }
  }

  
  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }} >
        <Cover>
          <FilterComponent />
        </Cover>
        <TouchableOpacity 
          onPress={() => this.props.closeFilterMenu()}
          style={{ position: 'absolute', top: 10, left: "50%", marginLeft: -22, zIndex: 1 }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
        
        </Content>
      </AnimatedContainer> 
    )
  }
}

export default connect(mapStateToProps, { closeFilterMenu })(Modal);


const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`


const Container = styled.View`
  position: absolute;
  background: white;
  width: ${cardWidth};
  align-self: center;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`
