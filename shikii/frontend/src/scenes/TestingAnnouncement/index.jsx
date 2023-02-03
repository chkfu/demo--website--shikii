// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import TestingImg from './images/testingannouncement-coverimage-001.png';
import ContainedButton from '../../components/Button/ContainedButton';

function TestingAnnouncement() {
  return (
    <Box
      className='format--container'
      sx={ { display: 'flex', justifyContent: 'center' } }>
      <Box
        className='inner--container'
        sx={ { justifyContent: 'center', width: '600px', p: '20px' } }>

        <Box className='image--box'>
          <img src={ TestingImg } alt='image of testing announcement page' style={ { width: '380px' } } />
        </Box>

        <Box>
          <Typography sx={ { fontSize: '48px', fontWeight: 'bold', textAlign: 'center' } }>No further access.</Typography>
          <Typography sx={ { color: '#666666', textAlign: 'center' } }>This website is made for programming practice.</Typography>
          <Typography sx={ { color: '#666666', textAlign: 'center' } }>Only limited access is offered in this stage.</Typography>
        </Box>

        <Box className='button--box' sx={ {
          display: 'flex', justifyContent: 'center', p: '40px'
        } }>
          <Link to='/' style={ { textDecoration: 'none' } }><ContainedButton text='Return Home' /></Link>
        </Box>

      </Box>


    </Box >
  );
}

export default TestingAnnouncement;