// from package
import React from 'react';
import { Typography } from '@mui/material';


// styles
const TitleStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '32px',
  textTransform: 'capitalize',
  zIndex: '2',
  p: '50px'
};


// rendering
function AdvertisementTitle({ text }) {
  return (
    <Typography sx={ TitleStyle }>
      { text }
    </Typography>
  );
}

export default AdvertisementTitle;
