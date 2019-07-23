import { createStackNavigator } from 'react-navigation';

import Address from '../../screens/Bag/address';
import Payment from '../../screens/Bag/payment';
import Terms from '../../screens/Bag/terms';

export default createStackNavigator({
  Terms,
  Payment,
  Address
})