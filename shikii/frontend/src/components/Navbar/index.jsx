import React from 'react';
import { AppBar, Box } from '@mui/material';
import BarLeft from './BarLeft/BarLeft';
import BarRight from './BarRight/BarRight';


const NavbarContainer = ({ children }) => {
  return (
    <AppBar position='sticky'>
      <Box
        className='navbar--container'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100px',
          p: '0 40px',
          backgroundColor: '#49453F',
          color: '#908B84'
        }}
      >
        {children}
      </Box>
    </AppBar>

  );
};

function Navbar() {
  return (
    <NavbarContainer>
      <BarLeft />
      <BarRight />
    </NavbarContainer>
  );
}

export default Navbar;