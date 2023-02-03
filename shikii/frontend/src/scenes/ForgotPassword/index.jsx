// from package
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// from file
import InputFieldReuse from '../../components/Formik/InputFieldReuse';
import LogoSection from './LogoSection';
import TextSection from './TextSection';
import FormSection from './FormSection';



function ForgotPassword() {
  return (

    <Box sx={ { display: 'flex', justifyContent: 'center' } }>
      <Box sx={ { width: '450px', height: '550px', boxShadow: '3', m: '40px', p: '10px 40px' } }>

        <LogoSection />
        <TextSection />
        <FormSection />

      </Box >
    </Box>
  );
}

export default ForgotPassword;
