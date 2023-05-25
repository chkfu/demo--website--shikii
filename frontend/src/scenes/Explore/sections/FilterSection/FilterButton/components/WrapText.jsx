// from package
import React from 'react';
import { Typography } from '@mui/material';


// styles
const TextStyle = {
  p: '5px 3px',
  textTransform: 'capitalize',
  fontSize: '16px'
};


// rendering
function WrapText({ text }) {
  return (
    <Typography sx={ TextStyle }>
      { text }
    </Typography>
  );
}

export default WrapText;
