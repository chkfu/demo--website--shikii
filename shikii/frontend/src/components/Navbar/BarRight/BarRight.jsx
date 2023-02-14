// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import '../css/navbar.css';
import CartComponent from './CartComponent';
import LoginComponent from './LoginComponent';
import SearchComponent from './SearchComponent';
import { ResponsiveContext } from '../../../App';

// BarRight.jsx

function BarRight() {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // data fetching
  const { data, error, isLoading, isError } = useQuery('GetCurrUser', async () => {
    return await axios.get('http://127.0.0.1:3002/api/v1/users/get-current-user');
  });
  if (isLoading) {
    console.log('loading...');
  }
  if (isError) {
    console.log(error);
  }

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