// from package
import React from 'react';
// from file
import SceneContainer from './../../components/Container/SceneContainer';
import ProgressionBar from './ProgressionBar';
import ButtonColumn from './ButtonColumn';
import CartTopbar from './CartTopbar';
import PageSelector from './PageSelector';


// rendering

function Cart() {

  // rendering
  return (
    <SceneContainer>
      <CartTopbar />
      <ProgressionBar />
      <PageSelector />
      <ButtonColumn />
    </SceneContainer >
  );
}

export default Cart;