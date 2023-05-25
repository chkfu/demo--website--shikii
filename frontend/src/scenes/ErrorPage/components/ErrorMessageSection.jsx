// from package
import React from 'react';
import { Box, Typography } from '@mui/material';



// styles
const ErrorCodeStyle = {
  fontSize: '56px'
};

const ErrorMessageStyle = {
  color: '#666666',
  padding: '20px'
};

const AdviceMessageStyle = {
  color: '#666666'
};

// components
const ErrorMessageBox = () => {
  return (
    <Typography>
      <b style={ ErrorCodeStyle }> 404. </b>
      <span style={ ErrorMessageStyle }> That's an error.' </span>
    </Typography>
  );
};

const AdviceBox = () => {
  return (
    <Typography sx={ AdviceMessageStyle } >
      "The requested URL was not found...."
    </Typography >
  );
};

// rendering

function ErrorMessageSection() {
  return (
    <Box>
      <ErrorMessageBox />
      <AdviceBox />
    </Box>
  );
}

export default ErrorMessageSection;
