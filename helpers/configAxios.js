import axios from 'axios';

import { retrieveToken } from '../helpers/AsyncStorage';

const baseUrl = `https://mobilebackend.turing.com`

const createConnection = () => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTIsIm5hbWUiOiJFZGVyIFRhdmVpcmEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA3ODYyMjAsImV4cCI6MTU1MDg3MjYyMH0.QEGdry367EQNxBqzuUDCGJscWkq8YQwJdGBgV3hztR0'}
  });
  if (!instance) {
    throw Error;
  }
  return instance;
};

export default createConnection;
