// from package
import React from 'react';
import { Box } from '@mui/material';


// styles
const ContainerStyle = {
  p: '0 40px 0 0',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '80px',
};


// rendering
function SectionContainer({ children }) {
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default SectionContainer;
