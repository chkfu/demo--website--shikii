// from package
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import ContainedButton from '../../../../../Button/ContainedButton';


// styles
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const LinkStyle = {
  textDecoration: 'none'
};

// rendering
function ButtonSection() {

  return (
    <Box
      sx={ ContainerStyle }
      onClick={ () => setDrawerOpen(false) } >

      <Link
        to='/cart'
        style={ LinkStyle }>
        <ContainedButton text='Proceed' />
      </Link>

    </Box>
  );
}

export default ButtonSection;
