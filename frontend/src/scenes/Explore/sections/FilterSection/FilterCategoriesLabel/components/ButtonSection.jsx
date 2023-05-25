// from package
import React from 'react';
import { Box, Button } from '@mui/material';



// styles
const SectionContainerStyle = {
  m: '5px'
};
const ButtonStyle = {
  textTransform: 'capitalize',
  border: '1px solid #c92a2a',
  color: '#c92a2a',
  ':hover': {
    border: '1px solid #c92a2a',
    backgroundColor: '#c92a2a',
    color: 'white'
  },
  ':active': {
    transform: 'scale(0.95)'
  }
};


// rendering
function ButtonSection({ setFilterHidden }) {
  return (
    <Box sx={ SectionContainerStyle }>
      <Button
        variant='outlined'
        sx={ ButtonStyle }
        onClick={ async () => setFilterHidden(true) }>
        Cancel
      </Button>
    </Box>
  );
}

export default ButtonSection;
