import axios from 'axios';

import { 
  FETCH_CART_ITEMS_LOADING, FETCH_CART_ITEMS_SUCCESS, FETCH_CART_ITEMS_FAILURE, FETCH_CART_TOTAL_SUCCESS,
  ADD_CART_ITEM_LOADING, ADD_CART_ITEM_SUCCESS, ADD_CART_ITEM_FAILURE,
 } from './actionTypes';

const cartID = '1xh7q3073djyue06rn'

export const cartItemLoading = isLoading => ({
  type: FETCH_CART_ITEMS_LOADING,
  payload: isLoading,
});

export const cartItemSuccess = payload => ({
  type: FETCH_CART_ITEMS_SUCCESS,
  payload
});


export const cartItemFailure = error => ({
  type: FETCH_CART_ITEMS_FAILURE,
  payload: error,
});

export const cartTotalSuccess = payload => ({
  type: FETCH_CART_TOTAL_SUCCESS,
  payload
});

export const fetchCartItems = () => dispatch => {
  dispatch(cartItemLoading(true))

  return axios.get(`https://mobilebackend.turing.com/shoppingcart/${cartID}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'user-key': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTIsIm5hbWUiOiJFZGVyIFRhdmVpcmEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA3ODYyMjAsImV4cCI6MTU1MDg3MjYyMH0.QEGdry367EQNxBqzuUDCGJscWkq8YQwJdGBgV3hztR0',
    }
})
    .then(response => {
      dispatch(cartItemSuccess(response.data))
      return axios.get(`https://mobilebackend.turing.com/shoppingcart/totalAmount/${cartID}`, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'user-key': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTIsIm5hbWUiOiJFZGVyIFRhdmVpcmEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA3ODYyMjAsImV4cCI6MTU1MDg3MjYyMH0.QEGdry367EQNxBqzuUDCGJscWkq8YQwJdGBgV3hztR0',
          }
      })
      .then(response => {
        dispatch(cartTotalSuccess(response.data.total_amount))
        dispatch(cartItemLoading(false))
      })
      .catch(error => {
        dispatch(cartItemLoading(false))
        dispatch(cartItemFailure(error))
      })
    })
    .catch(error => {
      dispatch(cartItemLoading(false))
      dispatch(cartItemFailure(error))
    })
}


export const addItemCart = (data) => dispatch => {
  dispatch(cartItemLoading(true))
  return axios.post('https://mobilebackend.turing.com/shoppingcart/add', data, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'user-key': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTIsIm5hbWUiOiJFZGVyIFRhdmVpcmEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA3ODYyMjAsImV4cCI6MTU1MDg3MjYyMH0.QEGdry367EQNxBqzuUDCGJscWkq8YQwJdGBgV3hztR0',
    }
  })
    .then(response => {
      dispatch(cartItemSuccess(response.data))
      dispatch(cartItemLoading(false))
    })
    .catch(error => {
      dispatch(cartItemLoading(false))
      dispatch(cartItemFailure(error))
    })
}

export const removeItemCart = (id) => dispatch => {
  dispatch(cartItemLoading(true))
  return axios.delete(`https://mobilebackend.turing.com/shoppingcart/removeProduct/${id}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'user-key': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTIsIm5hbWUiOiJFZGVyIFRhdmVpcmEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA3ODYyMjAsImV4cCI6MTU1MDg3MjYyMH0.QEGdry367EQNxBqzuUDCGJscWkq8YQwJdGBgV3hztR0',
    }
  })
    .then(response => {
      // dispatch(cartItemSuccess(response.data))
      dispatch(cartItemLoading(false))
    })
    .catch(error => {
      dispatch(cartItemLoading(false))
      dispatch(cartItemFailure(error))
    })
}

