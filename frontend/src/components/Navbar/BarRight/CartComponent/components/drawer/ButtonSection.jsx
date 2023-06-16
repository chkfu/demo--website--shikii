// from package
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// from file
import ContainedButton from '../../../../../Button/ContainedButton';
import { switchCartOpen } from '../../../../../../../redux/reducers/navbarSlice';

// styles
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const LinkStyle = {
  textDecoration: 'none'
};

// rendering
function ButtonSection() {

  // redux
  const dispatch = useDispatch();

  // function
  const ClickHandler = () => {
    dispatch(switchCartOpen(false));
  };

  // render
  return (
    <Box sx={ ContainerStyle } >
      <Link
        to='/cart'
        style={ LinkStyle }>
        <ContainedButton
          text='Proceed'
          callbackFn={ ClickHandler } />
      </Link>
    </Box>
  );
}

export default ButtonSection;
