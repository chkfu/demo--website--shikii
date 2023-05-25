// from package
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import ContainedButton from '../../../components/Button/ContainedButton';


// styles 
const ContainerStyle = {
  display: 'flex', justifyContent: 'center', p: '40px'
};

const LinkStyle = {
  textDecoration: 'none'
};

// rendering
function ButtonSection() {
  return (
    <Box sx={ ContainerStyle }>
      <Link to='/' style={ LinkStyle }>
        <ContainedButton text='Return Home' />
      </Link>
    </Box>
  );
}

export default ButtonSection


