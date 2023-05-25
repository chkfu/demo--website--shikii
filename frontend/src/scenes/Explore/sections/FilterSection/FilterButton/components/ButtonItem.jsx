// from package
import React from 'react';
import { Button } from '@mui/material';



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
function ButtonItem({ children, setFilterHidden }) {
  return (
    <Button
      variant='outlined'
      sx={ ButtonStyle }
      onClick={ async () => setFilterHidden(false) }>
      { children }
    </Button>
  );
}

export default ButtonItem;
