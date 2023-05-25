// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import ErrorImg from './../images/errorpage-coverimage-001.png';

// styles
const ImageStyle = {
  width: '500px'
};

// rendering
function ImageSection() {
  return (
    <Box>
      <img
        src={ ErrorImg }
        alt='image of error page'
        style={ ImageStyle } />
    </Box>
  );
}

export default ImageSection;
