// from package
import React from 'react';
import { Box } from '@mui/material';


// styles
const ContainerSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '400px'
};

// rendering
function ProgressStepSection({ children }) {
  return (
    <Box sx={ ContainerSectionStyle }>
      { children }
    </Box>
  );
}

export default ProgressStepSection;
