import React from 'react';
import { IconButton } from '@mui/material';

function FunctionIcons({ children }) {
  return (
    <IconButton
      className='navbar--functionIcons'>
      {children}
    </IconButton>
  );
}

export default FunctionIcons;