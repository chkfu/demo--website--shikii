import React from 'react';
import { Box, Typography } from '@mui/material';

function index() {
  return (
    <Box className='instruction--box'
      sx={ { p: '10px 20px' } }>

      <Typography
        sx={ {
          textAlign: 'left', fontSize: '24px',
          fontWeight: 'bold', p: '10px 0'
        } }>
        Forgot Password
      </Typography>

      <Typography sx={ { textAlign: 'left', fontSize: '16px' } }>
        Please enter the email address you'd like your password information sent to
      </Typography>
    </Box >
  );
}

export default index;
