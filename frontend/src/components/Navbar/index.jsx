// from package
import React, { useEffect } from 'react';
import { AppBar, Box } from '@mui/material';
// from file
import BarLeft from './BarLeft/BarLeft';
import BarRight from './BarRight/BarRight';


// styles
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '120px',
  p: '0 40px',
  backgroundColor: '#49453F',
  color: '#908B84'
};


// component
const NavbarContainer = ({ children }) => {
  return (
    <AppBar position='sticky'>
      <Box sx={ ContainerStyle }>
        { children }
      </Box>
    </AppBar>

  );
};


// rendering
function Navbar() {
  return (
    <NavbarContainer>
      <BarLeft />
      <BarRight />
    </NavbarContainer>
  );
}

export default Navbar;