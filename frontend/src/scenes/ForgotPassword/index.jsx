// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import LogoSection from './LogoSection';
import TextSection from './TextSection';
import FormSection from './FormSection';



// styles

const OuterBoxStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const InnerBoxStyle = {
  width: '450px',
  height: '550px',
  boxShadow: 3,
  m: '40px',
  p: '10px 40px'
};

// rendering

function ForgotPassword() {
  return (
    <Box sx={ OuterBoxStyle }>
      <Box sx={ InnerBoxStyle }>
        <LogoSection />
        <TextSection />
        <FormSection />
      </Box>
    </Box>
  );
}

export default ForgotPassword;
