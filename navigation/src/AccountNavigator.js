import React from "react";
import { createStackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Account from '../../screens/Account/home';
import StatusScreen from '../../screens/Account/status';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const AccountNavigator = createStackNavigator({
  Account,
  StatusScreen,
})

AccountNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons 
      name="account-details"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default AccountNavigator