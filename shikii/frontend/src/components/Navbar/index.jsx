// from package
import React from 'react';
import { AppBar, Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import BarLeft from './BarLeft/BarLeft';
import BarRight from './BarRight/BarRight';


const NavbarContainer = ({ children }) => {

  const { data, error, isLoading, isError } = useQuery('getCurrUser', async () => {
    return await axios.get('http;//127.0.0.1:3002/api/v1/products');
  });
  if (isLoading) {
    console.log('loading');
  }
  if (isError) {
    console.log(error);
  }

  return (
    <AppBar position='sticky'>
      <Box
        className='navbar--container'
        sx={ {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '120px',
          p: '0 40px',
          backgroundColor: '#49453F',
          color: '#908B84'
        } }
      >
        { children }
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