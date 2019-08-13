import React from "react";

import { createStackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';


import CartListScreen from '../../screens/Cart/cartlist';
import CartEditScreen from '../../screens/Cart/cartedit';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const CartNavigator = createStackNavigator({
  CartListScreen
,
  CartEditScreen,
})

CartNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialIcons 
      name="add-shopping-cart"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default CartNavigator