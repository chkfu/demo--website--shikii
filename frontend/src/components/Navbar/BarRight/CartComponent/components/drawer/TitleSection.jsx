// from package
import React from 'react';
import { Box, Typography } from '@mui/material';


// styles
const TextStyle = {
  p: '10px',
  fontSize: '24px',
  color: '#49453F'
};


// rendering
function TitleSection() {
  return (
    <Box>
      <Typography
        sx={ TextStyle }>
        Shopping Cart
      </Typography>
    </Box>
  );
}

export default TitleSection;
