// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import { ResponsiveContext } from '../../../../../../App';



// rendering
function LabelContainer({ children }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // redux
  const filterHidden = useSelector(state => state.explore.filterHidden);

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
