import React from 'react';
import { Typography } from '@mui/material';

function HomeHeading({ title }) {
  return (
    <Typography
      sx={{
        p: '5px',
        fontSize: '32px'
      }}>
      {title}
    </Typography>
  );
}

export default HomeHeading;