// from package
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
// from file
import './../css/faq.css';


// styles

const SectionContainerStyle = {
  display: 'block',
  width: '100%',
  marginTop: '40px',
  padding: '0 10vw'
};

const InnerContainerStyle = {
  width: '100%',
  height: '200px',
  overflow: 'hidden'
};

const MainTitleStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '32px',
  textTransform: 'uppercase',
  zIndex: '2',
  p: '50px'
};

const TextStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '24px',
  textAlign: 'left',
  zIndex: '2',
  p: '100px 50px'
};

const ShadowContainerStyle = {
  width: '100%',
  height: '100%',
  zIndex: '1'
};

const DividerStyle = {
  mt: '20px'
};


// rendering

function AdvertismentSection() {
  return (
    <Box sx={ SectionContainerStyle }>
      <Box
        className='faq--advertisement--container'
        sx={ InnerContainerStyle }>

        <Typography
          sx={ MainTitleStyle }>
          FAQ
        </Typography>

        <Typography sx={ TextStyle }>
          Have Question? Sort it out.
        </Typography>

        <Box
          className='faq--advertisement--container'
          sx={ ShadowContainerStyle } />

      </Box>
      <Divider sx={ DividerStyle } />
    </Box>
  );
}

export default AdvertismentSection;
