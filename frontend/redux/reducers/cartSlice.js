// from package
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    currStep: 1,
    totalPage: 3
  },
  reducers: {
    addCurrStep: (state, action) => {
      state.currStep += 1;
    },
    reduceCurrStep: (state, action) => {
      state.currStep -= 1;
    },
    setCurrStep: (state, action) => {
      state.currStep = action.payload;
    },
  }
});

export const { addCurrStep, reduceCurrStep, setCurrStep } = cartSlice.actions;

export default cartSlice.reducer;