// from package
import React, { useState } from 'react';
// from file
import SceneContainer from './../../components/Container/SceneContainer';
import ProgressionBar from './ProgressionBar';
import ButtonColumn from './ButtonColumn';
import CartTopbar from './CartTopbar';
import PageSelector from './PageSelector';


// rendering

function Cart() {

  // declaration
  const totalPage = 3;

  // state management
  const [currStep, setCurrStep] = useState('1');

  // rendering
  return (
    <SceneContainer>
      <CartTopbar />
      <ProgressionBar totalPage={ totalPage } currStep={ currStep } setCurrStep={ setCurrStep } />
      <PageSelector currStep={ currStep } />
      <ButtonColumn totalPage={ totalPage } currStep={ currStep } setCurrStep={ setCurrStep } />
    </SceneContainer >
  );
}

export default Cart;