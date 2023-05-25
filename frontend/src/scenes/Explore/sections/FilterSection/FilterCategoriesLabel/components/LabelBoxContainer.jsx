// from package
import React from 'react';
import { Box } from '@mui/material';


// styles
const ContainerStyle = {
  p: '10px 0',
  display: 'flex',
  justifyContext: 'left',
  flexWrap: 'wrap'
};


// rendering
function LabelBoxContainer({ children }) {
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default LabelBoxContainer;
