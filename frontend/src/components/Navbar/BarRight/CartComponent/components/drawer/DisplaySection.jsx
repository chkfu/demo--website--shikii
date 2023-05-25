// from package
import React from 'react';
import { Box } from '@mui/material';


// styles
const ContanierSection = {
  height: '530px',
  p: '20px',
  overflow: 'scroll'
};

// rendering
function DisplaySection({ children }) {
  return (
    <Box
      sx={ ContanierSection }>
      { children }
    </Box>
  );
}

export default DisplaySection;
