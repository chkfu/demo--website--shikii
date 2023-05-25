// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../../../../App';


// styles

const ContainerStyle = {
  p: '0 5px',
  textAlign: 'left'
};

const LabelStyle = {
  fontSize: '16px'
};


// rendering

function SearchLabel() {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  return (
    screenWidth > 1024 &&
    <Box sx={ ContainerStyle }>
      <label style={ LabelStyle }>
        Filtered by:
      </label>
    </Box>
  );
}

export default SearchLabel;
