import { createBottomTabNavigator } from 'react-navigation';

import Home from './HomeNavigator';
import Category from './CategoryNavigator';
import Inspiration from './InspirationNavigator';
import Product from './ProductNavigator';
import Contact from './ContactNavigator';
import Bag from './CheckoutNavigator';
import Account from './AccountNavigator';
import Cart from './CartNavigator';

export default createBottomTabNavigator({
  Home,
  Category,
  Cart,
  Account,
  Bag,
  Contact,
  Product,
  Inspiration
})