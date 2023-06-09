// from package
import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    menuOpen: false,
    cartOpen: false,
    wishlistItems: []
  },
  reducers: {
    switchMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
    switchCartOpen: (state, action) => {
      state.cartOpen = action.payload;
    },
  }
});

export const { switchMenuOpen, switchCartOpen } = navbarSlice.actions;

export default navbarSlice.reducer;