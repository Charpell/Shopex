import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeNavigator';
import Inspiration from './InspirationNavigator';
import Product from './ProductNavigator';
import Contact from './ContactNavigator';

export default createBottomTabNavigator({
  Contact,
  HomeScreen,
  Product,
  Inspiration
})