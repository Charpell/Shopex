import { FETCH_CART_ITEMS_LOADING, FETCH_CART_ITEMS_SUCCESS, FETCH_CART_ITEMS_FAILURE, FETCH_CART_TOTAL_SUCCESS } from '../actions/actionTypes'

import { cartItem } from './initialState';

const cartReducer = (state = cartItem, action) => {
  switch(action.type) {
    case FETCH_CART_ITEMS_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_CART_ITEMS_SUCCESS:
      return { ...state, cart: action.payload };
    case FETCH_CART_TOTAL_SUCCESS:
      return { ...state, total: action.payload };
    case FETCH_CART_ITEMS_FAILURE:
      return state
    default:
      return state
  }
}

export default cartReducer;