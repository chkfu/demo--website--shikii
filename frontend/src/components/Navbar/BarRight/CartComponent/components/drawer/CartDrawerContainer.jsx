// from package
import React from 'react';
import { Box, Drawer } from '@mui/material';

// rendering
function CartDrawerContainer({ children, drawerOpen, setDrawerOpen }) {
  return (
    <Drawer
      anchor='right'
      open={ drawerOpen }
      onClose={ async () => setDrawerOpen(false) }>

      <Box sx={ {
        width: '600px'
      } }>
        { children }
      </Box>

    </Drawer >
  );
}

export default CartDrawerContainer;
