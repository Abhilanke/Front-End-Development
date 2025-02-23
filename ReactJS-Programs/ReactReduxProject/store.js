import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './src/reducers/counterReducer';

// Create Redux store with the reducer
const store = createStore(counterReducer);

export default store;


