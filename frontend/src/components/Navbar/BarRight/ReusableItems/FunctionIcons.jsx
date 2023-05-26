// from package
import React from 'react';
import { IconButton } from '@mui/material';
// from package


// rendering
function FunctionIcons({ children }) {
  // render
  return (
    <IconButton>
      { children }
    </IconButton >
  );
}

export default FunctionIcons;