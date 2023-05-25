import { configureStore } from '@reduxjs/toolkit';
import exploreSlice from './reducers/exploreSlice';
import cartSlice from './reducers/cartSlice';

export default configureStore({
  reducer: {
    explore: exploreSlice,
    cart: cartSlice
  }
});