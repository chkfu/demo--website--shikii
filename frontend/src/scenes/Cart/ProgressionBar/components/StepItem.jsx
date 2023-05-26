// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { setCurrStep } from '../../../../../redux/reducers/cartSlice';



// rendering
function StepItem({ step, title }) {

  // redux
  const currStep = useSelector(state => state.cart.currStep);

  // styles
  const ContainerStyle = {
    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',
    width: '50px', height: '50px', borderRadius: '100%',
    background: currStep >= step ? `linear-gradient(to top right, #295252 0%, #394545 65%)` : '#dee2e6',
    color: currStep >= step ? '#dee2e6' : '#adb5bd'
  };

  const TitleTextStyle = {
    position: 'absolute', top: '75px', fontSize: '16px',
    color: currStep >= step ? '#295252' : '#adb5bd'
  };

  // components

  const ItemContainer = ({ children }) => {
    // redux
    const dispatch = useDispatch();
    // render
    return (
      <Box
        data-title='Confirmation'
        sx={ ContainerStyle }
        onClick={ () => {
          if (step < currStep)
            return dispatch(setCurrStep(step));
        } }>
        { children }
      </Box>
    );
  };


  // render

  return (
    <ItemContainer>
      <Typography>
        { step }
      </Typography>
      <Typography sx={ TitleTextStyle }>
        { title }
      </Typography>
    </ItemContainer>
  );
}

export default StepItem;
