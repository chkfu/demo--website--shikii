// from package
import React from 'react';
import { Box, Typography } from '@mui/material';


// styles
const ContainerStyle = {
  mt: '10px',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
};

const TextStyle = {
  mt: '10px',
  p: '5px 40px',
  fontSize: '22px',
  overflowX: 'hidden'
};


// rendering
function PriceSection({ finalTotal }) {
  return (
    <Box sx={ ContainerStyle }>
      <Typography sx={ TextStyle }>
        Price:  £ { Number(finalTotal).toFixed(2) }
      </Typography>
    </Box>
  );
}

export default PriceSection;
