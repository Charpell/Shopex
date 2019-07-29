import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productReducer from './productReducer';
import componentReducer from './componentReducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  component: componentReducer
})