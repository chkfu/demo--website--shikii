// from package
import React from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
// from file
import { setFilterHidden } from '../../../../../../../redux/reducers/exploreSlice';


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
function ButtonSection() {

  // redux
  const dispatch = useDispatch();

  // render
  return (
    <Box sx={ SectionContainerStyle }>
      <Button
        variant='outlined'
        sx={ ButtonStyle }
        onClick={ async () => dispatch(setFilterHidden(true)) }>
        Cancel
      </Button>
    </Box>
  );
}

export default ButtonSection;
