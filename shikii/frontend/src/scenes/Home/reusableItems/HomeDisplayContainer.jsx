import React from 'react';
import { Box } from '@mui/material';

function HomeDisplayContainer({ children }) {
  return (
    <Box
      className='display--container--outer'
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px', height: 'auto' }}>
      {children}
    </Box>
  );
}

export default HomeDisplayContainer;