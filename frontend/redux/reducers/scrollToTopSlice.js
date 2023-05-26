// from package
import { createSlice } from '@reduxjs/toolkit';


export const scrollToTopSlice = createSlice({
  name: 'scrollToTop',
  initialState: {
    btnDisplay: false
  },
  reducers: {
    setBtnDisplay: (state, action) => {
      state.btnDisplay = action.payload;
    }
  },
});

export const { setBtnDisplay } = scrollToTopSlice.actions;

export default scrollToTopSlice.reducer;