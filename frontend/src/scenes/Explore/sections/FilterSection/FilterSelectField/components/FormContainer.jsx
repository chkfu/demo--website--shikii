// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../../../../../App';


// styles

const ShrinkedContainerStyle = {
  width: '25%',
  height: '50px',
  textAlign: 'center',
  p: '0'
};

const ExpandedContainerStyle = {
  width: '100%',
  height: '120px',
  textAlign: 'left',
  p: '0 15px'
};


// rendering

function FormContainer({ children }) {
  // responsive design
  const screenWidth = useContext(ResponsiveContext);
  // render
  return (
    <Box sx={ screenWidth <= 1024 ? ShrinkedContainerStyle : ExpandedContainerStyle }>
      { children }
    </Box>
  );
}

export default FormContainer;
