// from package
import React from 'react';
import { Box, Drawer } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { switchCartOpen } from './../../../../../../../redux/reducers/navbarSlice';


// styles

const ContainerStyle = {
  width: '600px'
};


// rendering
function CartDrawerContainer({ children }) {

  // redux
  const cartOpen = useSelector(state => state.navbar.cartOpen);
  const dispatch = useDispatch();

  // function
  const OnCloseHandler = () => {
    dispatch(switchCartOpen(false));
  };

  // render
  return (
    <Drawer
      anchor='right'
      open={ cartOpen }
      onClose={ OnCloseHandler }>

      <Box sx={ ContainerStyle }>
        { children }
      </Box>

    </Drawer >
  );
}

export default CartDrawerContainer;
