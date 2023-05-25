// from package
import React from 'react';
import { Box } from '@mui/material';


// styles 
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '450px',
  m: '20px 0',
};

// rendering
function ReviewStepContainer({ children }) {
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default ReviewStepContainer;
