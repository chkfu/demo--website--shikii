// from package
import React from 'react';
import { Box } from '@mui/material';


// styles
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '400px',
  height: '100px',
  '::before': {
    content: '""',
    position: 'absolute',
    backgroundColor: '#dee2e6',
    width: '100%',
    height: '4px',
    top: '50%',
    zIndex: '-2'
  }
};

// rendering

function InnerContainer({ children }) {
  return (
    <Box sx={ ContainerStyle } >
      { children }
    </Box>
  );
}

export default InnerContainer;
