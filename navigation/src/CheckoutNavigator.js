import { createStackNavigator } from 'react-navigation';

import Address from '../../screens/Bag/address';
import Payment from '../../screens/Bag/payment';
import Terms from '../../screens/Bag/terms';
import Complete from '../../screens/Bag/complete';

export default createStackNavigator({
  Complete,
  Terms,
  Payment,
  Address
})