// rendering
import React from 'react';
import { Box } from '@mui/material';


//styles
const ContainerStyle = {
  justifyContent: 'center',
  width: '600px',
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
