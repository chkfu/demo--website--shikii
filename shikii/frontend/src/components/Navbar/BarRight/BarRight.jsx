// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import '../css/navbar.css';
import CartComponent from './CartComponent';
import LoginComponent from './LoginComponent';
import SearchComponent from './SearchComponent';
import { ResponsiveContext } from '../../../App';

// BarRight.jsx

function BarRight() {
  const screenWidth = useContext(ResponsiveContext);
  return (
    screenWidth >= 768 ? (
      <Box sx={ { display: 'flex', mr: '20px' } }>
        <LoginComponent />
        <SearchComponent />
        <CartComponent />
      </Box >
    ) : null
  );
};

export default BarRight;