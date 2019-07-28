import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeNavigator';
import Inspiration from './InspirationNavigator';
import Product from './ProductNavigator';
import Contact from './ContactNavigator';
import Bag from './CheckoutNavigator';
import Account from './AccountNavigator';

export default createBottomTabNavigator({
  HomeScreen,
  Account,
  Bag,
  Contact,
  Product,
  Inspiration
})