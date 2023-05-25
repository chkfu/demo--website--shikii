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
      return state.currPage += 1;
    },
    reduceCurrStep: (state, action) => {
      return state.currPage -= 1;
    },
    setCurrStep: (state, action) => {
      return state.currPage = action.payload;
    },
  }
});

export const { addCurrStep, reduceCurrStep, setCurrStep } = cartSlice.actions;

export default cartSlice.reducer;