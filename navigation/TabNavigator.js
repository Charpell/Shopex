import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen'
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const Navigator = createSwitchNavigator({
  AuthNavigator,

  HomeNavigator,

  LandingScreen,
})

export default createAppContainer(Navigator)