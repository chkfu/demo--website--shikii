// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../../../../App';



// rendering
function LabelContainer({ children, filterHidden }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // style
  const ContainerStyle = {
    display: filterHidden ? 'none' : 'static',
    boxShadow: screenWidth <= 1024 ? '1' : '0',
    mr: '5px',
    p: screenWidth < 1024 ? '10px' : '5px'
  };

  // render
  return (
    <Box sx={ ContainerStyle }>
      { children }
    </Box>
  );
}

export default LabelContainer;
