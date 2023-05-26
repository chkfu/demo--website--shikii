// from package
import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
// from file
import { switchCartOpen } from './../../../../../../../redux/reducers/navbarSlice';

// styles
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'end'
};

// rendering 
function CloseBtnBox() {
  // redux
  const dispatch = useDispatch();
  // render
  return (
    <Box sx={ ContainerStyle }>
      <IconButton onClick={ () => dispatch(switchCartOpen(false)) }>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default CloseBtnBox;
