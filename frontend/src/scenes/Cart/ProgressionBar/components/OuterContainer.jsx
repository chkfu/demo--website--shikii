// from package
import React from 'react';
import { Box } from '@mui/material';

// styles
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'center'
};

// rendering
function OuterContainer({ children }) {
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default OuterContainer;
