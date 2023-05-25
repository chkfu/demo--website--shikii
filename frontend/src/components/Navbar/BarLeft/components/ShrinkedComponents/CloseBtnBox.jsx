// from package
import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



// styles

const ContainerStyle = {
  display: 'flex',
  justifyContent: 'end'
};

const IconBtnBox = {
  p: '20px'
};


// rendering

function CloseBtnBox({ setMenuOpen }) {
  return (
    <Box sx={ ContainerStyle } >

      <IconButton
        sx={ IconBtnBox }
        onClick={ () => setMenuOpen(false) }>
        <CloseIcon />
      </IconButton>

    </Box>
  );
}

export default CloseBtnBox;
