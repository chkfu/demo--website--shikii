// from package
import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


// styles
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'end'
};

// rendering 
function CloseBtnBox({ setDrawerOpen }) {
  return (
    <Box sx={ ContainerStyle }>
      <IconButton onClick={ async () => setDrawerOpen(false) }>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default CloseBtnBox;
