import React from "react";
import { createStackNavigator } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../../screens/Home/home';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeNavigator = createStackNavigator({
  HomeScreen
})

HomeNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialIcons 
      name="home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default HomeNavigator