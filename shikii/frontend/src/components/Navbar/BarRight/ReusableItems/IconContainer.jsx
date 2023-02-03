import React from 'react';
import { Box } from '@mui/material';

function IconContainer({ children }) {
  return (
    <Box
      className='navbar--functionContainer'>
      {children}
    </Box>
  );
};


export default IconContainer;