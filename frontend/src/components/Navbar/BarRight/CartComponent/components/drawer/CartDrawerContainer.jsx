// from package
import React from 'react';
import { Box, Drawer } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { switchCartOpen } from './../../../../../../../redux/reducers/navbarSlice';

// rendering
function CartDrawerContainer({ children }) {
  // redux
  const cartOpen = useSelector(state => state.navbar.cartOpen);
  const dispatch = useDispatch();
  // render
  return (
    <Drawer
      anchor='right'
      open={ cartOpen }
      onClose={ () => dispatch(switchCartOpen(false)) }>

      <Box sx={ {
        width: '600px'
      } }>
        { children }
      </Box>

    </Drawer >
  );
}

export default CartDrawerContainer;
