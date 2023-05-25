// from package
import React from 'react';
import { Typography } from '@mui/material';

// styles
const TextStyle = {
  transform: 'translateY(-50%)',
  fontSize: '14px'
};


// rendering
function FunctionTexts({ children }) {
  return (
    <Typography
      sx={ TextStyle }>
      { children }
    </Typography>
  );
}

export default FunctionTexts;