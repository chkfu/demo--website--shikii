// from package
import React from 'react';
import { Box } from '@mui/material';


// styles
const ContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  ml: '40px'
};


// rendering
function ExpandedBox({ children }) {
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default ExpandedBox;
