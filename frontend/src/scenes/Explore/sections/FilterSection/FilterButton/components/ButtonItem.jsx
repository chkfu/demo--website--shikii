// from package
import React from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { setFilterHidden } from '../../../../../../../redux/reducers/exploreSlice';



// styles
const ButtonStyle = {
  border: '0.5px solid #295252',
  color: '#295252',
  borderRadius: '0',
  ':hover': {
    border: 'none',
    backgroundColor: '#295252',
    color: 'white',
  }
};

// rendering
function ButtonItem({ children }) {

  // redux
  const filterHidden = useSelector(state => state.explore.filterHidden);
  const dispatch = useDispatch();

  // render
  return (
    <Button
      variant='outlined'
      sx={ ButtonStyle }
      onClick={ () => dispatch(setFilterHidden(!filterHidden)) }>
      { children }
    </Button>
  );
}

export default ButtonItem;
