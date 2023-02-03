// from package
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
// from files
import '../css/featureSection.css';
import OutlinedButton from '../../../components/Button/OutlinedButton';

function FeatureSection() {
  return (
    <section>
      <Box
        className='section--features--textbox'
        sx={{
          position: 'absolute',
          m: '120px 0 0 10vw',
          p: '40px 0',
          width: '80vw',
          height: 'auto',
          zIndex: '1'
        }}>
        <Typography
          sx={{
            p: '40px 0',
            fontSize: '40px',
            color: 'white',
            textAlign: 'left',
            opacity: '0.8'
          }}>
          New Arrival
        </Typography>
        <Typography
          sx={{
            fontSize: '28px',
            color: 'white',
            textAlign: 'left',
            opacity: '0.8',
          }}>
          Decorate your new home with lastest fashion.
        </Typography>

        <Link to='/features' style={{ textDecoration: 'none' }}>
          <OutlinedButton flexDirection='flex-start' text='Learn More' />
        </Link>

      </Box>
      <Box className='section--features--background' />

      <Divider style={{ width: '100%' }} />
    </section>
  );
}

export default FeatureSection;