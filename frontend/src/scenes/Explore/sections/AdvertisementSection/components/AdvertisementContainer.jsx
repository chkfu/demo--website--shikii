// from package
import React from 'react';
import { Box } from '@mui/material';


// styles
const ContainerStyle = {
  width: '100%',
  height: '200px',
  overflow: 'hidden',
};

// rendering
function AdvertisementContainer({ children }) {
  return (
    <Box
      className='explore--advertisement--container'
      sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default AdvertisementContainer;
