import { createStackNavigator } from 'react-navigation';

import CartListScreen from '../../screens/Cart/cartlist';
import CartEditScreen from '../../screens/Cart/cartedit';

export default createStackNavigator({
  CartEditScreen,
  CartListScreen
})