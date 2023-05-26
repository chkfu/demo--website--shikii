// from package
import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
// from file
import { switchMenuOpen } from '../../../../../../redux/reducers/navbarSlice';



// styles

const ContainerStyle = {
  display: 'flex',
  justifyContent: 'end'
};

const IconBtnBox = {
  p: '20px'
};


// rendering

function CloseBtnBox() {
  // redux
  const dispatch = useDispatch();
  // render
  return (
    <Box sx={ ContainerStyle } >

      <IconButton
        sx={ IconBtnBox }
        onClick={ () => { dispatch(switchMenuOpen(false)); } }>
        <CloseIcon />
      </IconButton>

    </Box>
  );
}

export default CloseBtnBox;
