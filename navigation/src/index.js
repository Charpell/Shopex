import { createBottomTabNavigator } from 'react-navigation';

import Home from './HomeNavigator';
import Category from './CategoryNavigator';
import Inspiration from './InspirationNavigator';
import Contact from './ContactNavigator';
import Bag from './CheckoutNavigator';
import Account from './AccountNavigator';
import Cart from './CartNavigator';
import Store from './StoreNavigator';

export default createBottomTabNavigator({
  Contact,

  Home,
  Account,
  Category,
  Cart,
  Bag,
  Inspiration,
  Store
})