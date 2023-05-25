// from package
import React from 'react';
import { Typography } from '@mui/material';


// styles
const SubtitleStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '24px',
  textAlign: 'left',
  zIndex: '2',
  p: '100px 50px'
};

// rendering
function AdvertisementSubtitle({ text }) {
  return (
    <Typography sx={ SubtitleStyle }>
      { text }
    </Typography>
  );
}

export default AdvertisementSubtitle;
