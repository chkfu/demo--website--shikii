import React from 'react';
import { Box } from '@mui/material';
import Logo from '../../../components/Logo/Logo';

function index() {
  return (
    <Box
      className='logo--format--container'
      sx={ { marginTop: '20px', padding: '10px' } }>
      <Logo />
    </Box>
  );
}

export default index;
