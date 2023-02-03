// from package
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
// from file
import SceneContainer from './../../components/Container/SceneContainer';
import ProgressionBar from './ProgressionBar';
import ReviewStep from './ReviewStep';
import ContactStep from './ContactStep';
import PaymentStep from './PaymentStep';
import ButtonColumn from './ButtonColumn';


function Cart() {

  // declaration
  const totalPage = 3;

  // state management
  const [currStep, setCurrStep] = useState('1');

  // page selection

  const PageSelector = ({ currStep }) => {
    if (currStep === '1') return <ReviewStep />;
    if (currStep === '2') return <ContactStep />;
    if (currStep === '3') return <PaymentStep />;
  };

  // rendering
  return (
    <SceneContainer>

      <Box>
        <Typography>Check out with 3 steps</Typography>
      </Box>

      <ProgressionBar totalPage={totalPage} currStep={currStep} setCurrStep={setCurrStep} />
      <PageSelector currStep={currStep} />
      <ButtonColumn totalPage={totalPage} currStep={currStep} setCurrStep={setCurrStep} />

    </SceneContainer >
  );
}

export default Cart;