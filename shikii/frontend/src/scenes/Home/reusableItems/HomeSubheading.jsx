import React from 'react';
import { Typography } from '@mui/material';

function HomeSubheading({ subtitle }) {
  return (
    <Typography
      sx={{
        p: '5px',
        fontSize: '24px'
      }}>
      {subtitle}
    </Typography>
  );
}

export default HomeSubheading;