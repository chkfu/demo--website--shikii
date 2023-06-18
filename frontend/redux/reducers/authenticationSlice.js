// from package
import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    currLoginPage: 1,
    currRegPage: 1,
    loginFormChosen: true
  },
  reducers: {
    setCurrLoginPage: (state, action) => {
      state.currLoginPage = action.payload;
    },
    setCurrRegPage: (state, action) => {
      state.currRegPage = action.payload;
    },
    setLoginFormChosen: (state, action) => {
      state.loginFormChosen = action.payload;
    },
  }
});

export const { setCurrLoginPage, setCurrRegPage, setLoginFormChosen } = authenticationSlice.actions;

export default authenticationSlice.reducer;