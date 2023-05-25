// from package
import React from 'react';
import { Box } from '@mui/material';

// styles
const ContainerStyle = {
  width: '400px',
  p: '20px 60px'
};

// rendering

function LinkContainer({ children }) {
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default LinkContainer;
