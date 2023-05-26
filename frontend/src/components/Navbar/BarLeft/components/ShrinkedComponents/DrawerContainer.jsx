// from package
import React from 'react';
import { Box, Drawer } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { switchMenuOpen } from '../../../../../../redux/reducers/navbarSlice';


// rendering
function DrawerContainer({ children }) {
  // redux
  const menuOpen = useSelector(state => state.navbar.menuOpen);
  const dispatch = useDispatch();
  // render
  return (
    <Drawer
      anchor='left'
      open={ menuOpen }
      onClick={ () => dispatch(switchMenuOpen(false)) }>

      <Box sx={ { width: '300px' } }>
        { children }
      </Box>
    </Drawer>
  );
}

export default DrawerContainer;
