// from package
import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
  name: 'cart',
  initialState: {
    currLoginPage: 1,
    currRegPage: 1
  },
  reducers: {
    setCurrLoginPage: (state, action) => {
      state.currLoginPage = action.payload;
    },
    setCurrRegPage: (state, action) => {
      state.currRegPage = action.payload;
    },

  }
});

export const { setCurrLoginPage, setCurrRegPage } = authenticationSlice.actions;

export default authenticationSlice.reducer;