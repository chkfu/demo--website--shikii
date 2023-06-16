// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import Logo from '../../../components/Logo/Logo';


// styles

const BoxStyle = {
  marginTop: '20px',
  padding: '10px'
};

// rendering

function index() {
  return (
    <Box sx={ BoxStyle }>
      <Logo />
    </Box>
  );
}

export default index;
