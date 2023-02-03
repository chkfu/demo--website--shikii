// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import ErrorImg from './images/errorpage-coverimage-001.png';
import ContainedButton from '../../components/Button/ContainedButton';

function ErrorPage() {
  return (
    <Box
      className='format--container'
      sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        className='inner--container'
        sx={{ justifyContent: 'center', width: '600px', p: '20px' }}>

        <Box className='image--box'>
          <img src={ErrorImg} alt='image of error page' style={{ width: '500px' }} />
        </Box>

        <Box sx={{}}>
          <Typography><b style={{ fontSize: '56px' }}>404.</b> <span style={{ color: '#666666', padding: '20px' }}>That's an error.'</span></Typography>
          <Typography sx={{ color: '#666666' }}>The requested URL was not found....'</Typography>
        </Box>

        <Box className='button--box' sx={{
          display: 'flex', justifyContent: 'center', p: '40px'
        }}>
          <Link to='/' style={{ textDecoration: 'none' }}><ContainedButton text='Return Home' /></Link>
        </Box>

      </Box>


    </Box >
  );
}

export default ErrorPage;