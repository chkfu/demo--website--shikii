// from package
import React from 'react';
import { Box, Typography } from '@mui/material';



// rendering
function StepItem({ step, title, currStep, setCurrStep }) {

  // styles

  const ContainerStyle = {
    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',
    width: '50px', height: '50px', borderRadius: '100%',
    background: Number(currStep) >= Number(step) ? `linear-gradient(to top right, #295252 0%, #394545 65%)` : '#dee2e6',
    color: Number(currStep) >= Number(step) ? '#dee2e6' : '#adb5bd'
  };

  const TitleTextStyle = {
    position: 'absolute', top: '75px', fontSize: '16px',
    color: Number(currStep) >= Number(step) ? '#295252' : '#adb5bd'
  };

  // components

  const ItemContainer = ({ children }) => {
    return (
      <Box
        data-title='Confirmation'
        sx={ ContainerStyle }
        onClick={ async () => { if (step < currStep) return setCurrStep(step.toString()); } }>
        { children }
      </Box>
    );
  };


  // render

  return (
    <ItemContainer>
      <Typography> { step } </Typography>
      <Typography sx={ TitleTextStyle }> { title } </Typography>
    </ItemContainer>
  );
}

export default StepItem;
