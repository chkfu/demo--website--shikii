// from package
import React from 'react';
import { IconButton } from '@mui/material';


// rendering
function FunctionIcons({ children, setDrawerOpen }) {
  return (
    <IconButton onClick={ () => { setDrawerOpen(true); } }>
      { children }
    </IconButton>
  );
}

export default FunctionIcons;