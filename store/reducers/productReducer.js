import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/actionTypes'

import { products } from './initialState';

const productReducer = (state = products, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return state
    default:
      return state
  }
}

export default productReducer;