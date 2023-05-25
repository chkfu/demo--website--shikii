// from package
import React from 'react';
import { Box, Button } from '@mui/material';


// callback fn

const defaultCallback = async () => {
  return;
};




// rendering

function ContainedButton({ flexDirection = 'center', size, text, type = "", callbackFn = defaultCallback }) {

  // styles

  const ContainerStyle = {
    m: '5px 10px',
    display: 'flex',
    justifyContent: { flexDirection },
    alignItems: 'center',
    height: '80px',
    zIndex: 1
  };

  const ButtonStyle = {
    p: '10px 25px',
    backgroundColor: '#295252',
    color: 'white',
    ':hover': { backgroundColor: '#1F3D3D' }
  };


  //  render
  return (
    <Box sx={ ContainerStyle }>
      <Button
        type={ type }
        variant='contained'
        size={ size }
        sx={ ButtonStyle }
        onClick={ callbackFn }>
        { text }
      </Button>
    </Box>
  );
}

export default ContainedButton;