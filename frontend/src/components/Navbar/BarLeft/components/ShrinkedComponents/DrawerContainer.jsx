// from package
import React from 'react';
import { Box, Drawer } from '@mui/material';


// rendering

function DrawerContainer({ children, menuOpen, setMenuOpen }) {
  return (
    <Drawer
      anchor='left'
      open={ menuOpen }
      onClick={ () => setMenuOpen(false) }>

      <Box sx={ { width: '300px' } }>
        { children }
      </Box>
    </Drawer>
  );
}

export default DrawerContainer;
