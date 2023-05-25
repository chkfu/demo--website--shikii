// from package
import React from 'react';
import { Box, Button } from '@mui/material';


//styles

const ContainerStyle = {
  display: 'flex'
};

const ButtonStyle = {
  m: '70px 0 0 0',
  p: '20px 40px',
  border: '3px solid white',
  backgroundColor: 'transparent',
  color: 'white',
  filter: 'brightness(0.8)',
  opacity: '0.8',
  ':hover': {
    border: '3px solid white',
    backgroundColor: 'white',
    filter: 'brightness(0.85)',
    color: '#343a40'
  }
};


// redering
function OutlinedButton({ size = 'large', text }) {
  return (
    <Box sx={ ContainerStyle }>
      <Button
        variant='outlined'
        size={ size }
        sx={ ButtonStyle }>
        { text }
      </Button>
    </Box>
  );
}

export default OutlinedButton;