// from package
import { createSlice } from '@reduxjs/toolkit';

export const pageLayoutSlice = createSlice({
  name: 'layout',
  initialState: {
    rate: 0,
    comment: ""
  },
  reducers: {
    setRate: (state, action) => {
      state.rate = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    }
  }
});

export const { setRate, setComment } = pageLayoutSlice.actions;

export default pageLayoutSlice.reducer;