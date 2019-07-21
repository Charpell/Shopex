import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeNavigator';
import Inspiration from './InspirationNavigator';
import Product from './ProductNavigator';

export default createBottomTabNavigator({
  HomeScreen,
  Product,
  Inspiration
})