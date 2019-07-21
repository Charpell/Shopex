import { createBottomTabNavigator } from 'react-navigation';

import Inspiration from './InspirationNavigator';
import Product from './ProductNavigator';

export default createBottomTabNavigator({
  Product,
  Inspiration
})