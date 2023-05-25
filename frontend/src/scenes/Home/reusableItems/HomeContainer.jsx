import React from 'react';
import { Box } from '@mui/material';

function HomeContainer({ children }) {
  return (
    <Box
      className='section-innerContainer'
      sx={{
        p: '80px 0',
        width: '100vw',
        minHeight: '800px',
        height: 'auto',
        color: '#49453F',
      }}>
      {children}
    </Box >
  );
}

export default HomeContainer;