import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import SideBar from '../components/SideBar';
import SourceNavigator from './src'

export default createDrawerNavigator({
  SourceNavigator,
}, {
  contentComponent: props => <SideBar {...props} />,
  drawerWidth: 269,
  drawerBackgroundColor: 'transparent',
  contentOptions: {
    activeBackgrundColor: 'transparent'
  }
})