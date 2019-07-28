import axios from 'axios';

import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';

export const productLoading = isLoading => ({
  type: FETCH_PRODUCTS_LOADING,
  payload: isLoading,
});

export const productSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload
});


export const productFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});


export const fetchProducts = () => dispatch => {
  dispatch(productLoading(true))

  return axios.get('https://mobilebackend.turing.com/products', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'user-key': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTIsIm5hbWUiOiJFZGVyIFRhdmVpcmEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA3ODYyMjAsImV4cCI6MTU1MDg3MjYyMH0.QEGdry367EQNxBqzuUDCGJscWkq8YQwJdGBgV3hztR0',
    }
})
    .then(response => {
      dispatch(productSuccess(response.data.rows))
      dispatch(productLoading(false))
    })
    .catch(error => {
      dispatch(productLoading(false))
      dispatch(productFailure(error))
    })
}

export const fetchProductsInCategory = categoryId => dispatch => {
  dispatch(productLoading(true))

  return axios.get(`https://mobilebackend.turing.com/products/inCategory/${categoryId}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'user-key': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTIsIm5hbWUiOiJFZGVyIFRhdmVpcmEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA3ODYyMjAsImV4cCI6MTU1MDg3MjYyMH0.QEGdry367EQNxBqzuUDCGJscWkq8YQwJdGBgV3hztR0',
    }
})
    .then(response => {
      dispatch(productSuccess(response.data.rows))
      dispatch(productLoading(false))
    })
    .catch(error => {
      dispatch(productLoading(false))
      dispatch(productFailure(error))
    })
}