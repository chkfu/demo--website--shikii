// from package
import React from 'react';
import { Box } from '@mui/material';

// styles
const ContainerStyle = {
  width: '100%',
  maxWidth: '500px',
  overflow: 'scroll',
  boxShadow: '2',
  p: '20px'
};

// rendering

function InnerContainer({ children }) {
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default InnerContainer;
