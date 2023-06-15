// from package
import { configureStore } from '@reduxjs/toolkit';
// from file
import cartSlice from './reducers/cartSlice';
import authenticationSlice from './reducers/authenticationSlice';
import exploreSlice from './reducers/exploreSlice';
import navbarSlice from './reducers/navbarSlice';
import scrollToTopSlice from './reducers/scrollToTopSlice';
import faqSlice from './reducers/faqSlice';
import pageLayoutSlice from './reducers/pageLayoutSlice';

export default configureStore({
  reducer: {
    cart: cartSlice,
    authentication: authenticationSlice,
    explore: exploreSlice,
    navbar: navbarSlice,
    scrollToTop: scrollToTopSlice,
    faq: faqSlice,
    layout: pageLayoutSlice
  }
});