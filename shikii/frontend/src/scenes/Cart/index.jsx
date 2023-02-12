// from package
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
// from file
import SectionScrollingIn from '../../components/Animation/SectionScrollingIn';
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
    if (currStep === '1') return <SectionScrollingIn> <ReviewStep /> </SectionScrollingIn>;
    if (currStep === '2') return <SectionScrollingIn> <ContactStep /> </SectionScrollingIn>;
    if (currStep === '3') return <SectionScrollingIn> <PaymentStep /> </SectionScrollingIn>;
  };

  // rendering
  return (
    <SceneContainer>

      <Box>
        <Typography>Check out with 3 steps</Typography>
      </Box>

      <ProgressionBar totalPage={ totalPage } currStep={ currStep } setCurrStep={ setCurrStep } />
      <PageSelector currStep={ currStep } />
      <ButtonColumn totalPage={ totalPage } currStep={ currStep } setCurrStep={ setCurrStep } />

    </SceneContainer >
  );
}

export default Cart;;;