import React from "react";
import { createStackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';


import InspirationHome from '../../screens/Inspiration/Home';
import LifeScreen from '../../screens/Inspiration/Life';
import LifeDetailScreen from '../../screens/Inspiration/LifeDetails';
import FashionScreen from '../../screens/Inspiration/Fashion';
import FashionDetailScreen from '../../screens/Inspiration/FashionDetail';
import VideoScreen from '../../screens/Inspiration/Videos';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const InspirationNavigator = createStackNavigator({
  InspirationHome,
  VideoScreen,
  FashionScreen,
  FashionDetailScreen,
  LifeScreen,
  LifeDetailScreen,
  
})

InspirationNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialIcons 
      name="beach-access"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default InspirationNavigator

