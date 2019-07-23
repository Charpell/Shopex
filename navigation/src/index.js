import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeNavigator';
import Inspiration from './InspirationNavigator';
import Product from './ProductNavigator';
import Contact from './ContactNavigator';
import Bag from './CheckoutNavigator';

export default createBottomTabNavigator({
  Bag,
  Contact,
  HomeScreen,
  Product,
  Inspiration
})