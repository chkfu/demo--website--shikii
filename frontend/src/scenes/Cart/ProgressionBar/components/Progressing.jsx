// from package
import React from 'react';
import { Box } from '@mui/material';


// rendering

function Progressing({ totalPage, currStep }) {

  // declaration
  const progressingPercentage = (Number(currStep) - 1) / (totalPage - 1);

  // styles
  const ContainerStyle = {
    position: 'absolute',
    background: `linear-gradient(to top right, #295252 0%, #394545 65%)`,
    top: '50%',
    height: '4px',
    zIndex: '-1',
    width: `${progressingPercentage}`,
    transition: 'width 2s'
  };

  return (
    <Box sx={ ContainerStyle } />
  );
}

export default Progressing;

