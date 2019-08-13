import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import SideBar from '../components/SideBar';
import SourceNavigator from './src'

import CategoryNavigator from './src/CategoryNavigator';
import CheckoutNavigator from './src/CheckoutNavigator';

export default createDrawerNavigator({
  SourceNavigator,
  CategoryNavigator,
  CheckoutNavigator
}, {
  contentComponent: props => <SideBar {...props} />,
  drawerWidth: 269,
  drawerBackgroundColor: 'transparent',
  contentOptions: {
    activeBackgrundColor: 'transparent'
  }
})