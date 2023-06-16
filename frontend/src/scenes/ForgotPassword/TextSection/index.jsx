// from package
import React from 'react';
import { Box, Typography } from '@mui/material';


// styles

const BoxStyle = {
  p: '10px 20px'
};

const Typography01_Style = {
  textAlign: 'left',
  fontSize: '24px',
  fontWeight: 'bold',
  p: '10px 0'
};

const Typography02_Style = {
  textAlign: 'left',
  fontSize: '16px'
};


// rendering

function index() {
  return (
    <Box sx={ BoxStyle }>

      <Typography sx={ Typography01_Style }>
        Forgot Password
      </Typography>

      <Typography sx={ Typography02_Style }>
        Please enter the email address you'd like your password information sent to
      </Typography>

    </Box >
  );
}

export default index;
