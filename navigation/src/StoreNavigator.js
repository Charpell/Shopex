import React from "react";
import { createStackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import StoreHome from '../../screens/Store/home';
import SelectedStore from '../../screens/Store/selected';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const StoreNavigator = createStackNavigator({
  StoreHome,
  SelectedStore
})

StoreNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons 
      name="google-maps"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default StoreNavigator