// from package
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';


// rendering

function Progressing() {

  // redux
  const totalPage = useSelector(state => state.cart.totalPage);
  const currStep = useSelector(state => state.cart.currStep);

  // declaration
  const progressingPercentage = (currStep - 1) / (totalPage - 1);

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

