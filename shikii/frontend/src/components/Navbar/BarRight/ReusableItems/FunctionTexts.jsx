import React from 'react';
import { Typography } from '@mui/material';

function FunctionTexts({ children }) {
  return (
    <Typography
      className='navbar--functionTexts'
      sx={{
        transform: 'translateY(-50%)',
        fontSize: '14px'
      }}>
      {children}
    </Typography>
  );
}

export default FunctionTexts;