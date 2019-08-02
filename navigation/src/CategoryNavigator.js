import { createStackNavigator } from 'react-navigation';

import MenCategory from '../../screens/Store/mencategory';
import WomenCategory from '../../screens/Store/womencategory';
import ProductScreen from '../../screens/Product/Home'

export default createStackNavigator({
  MenCategory,
  WomenCategory,
  ProductScreen
})