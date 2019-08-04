import { createStackNavigator } from 'react-navigation';

import MenCategory from '../../screens/Category/mencategory';
import WomenCategory from '../../screens/Category/womencategory';
import ProductScreen from '../../screens/Product/Home'

export default createStackNavigator({
  MenCategory,
  WomenCategory,
  ProductScreen
})