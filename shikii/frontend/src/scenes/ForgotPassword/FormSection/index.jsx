// from package
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// from file
import InputFieldReuse from '../../../components/Formik/InputFieldReuse';



// formik and yup settings

const forgotPasswordInitialValues = {
  email: ""
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('* Please enter the email address.')
});

const submitHandler = async (values) => {
  await axios.post('http://127.0.0.1:3002/api/v1/users/forgotPassword', values);
};

//  components

const FormBox = ({ values }) => {
  return (
    <Box className='form--box'
      sx={ { display: 'grid', gridTemplateRows: '1fr 3fr', justifyItems: "left", p: '20px 10px' } }>

      <label
        htmlFor='reset-email'
        style={ { padding: '0 10px', fontSize: '16px' } }>Enter email address</label>

      <Box sx={ { width: '350px' } }>
        <InputFieldReuse id='reset-email' name='email' text='email' />
      </Box>

    </Box>
  );
};

const ButtonBox = ({ values }) => {
  return (
    <Box className='button--box' sx={ { p: '20px' } }>

      <Link to='/testingAnnouncement' style={ { textDecoration: 'none' } }>
        <Button type='submit'
          variant='contained'
          sx={ {
            width: '320px', borderRadius: '0px', m: '5px', p: '10px',
            backgroundColor: '#295252',
            color: 'white',
            ':hover': { backgroundColor: '#1F3D3D' },
          } }>
          Request reset link
        </Button>
      </Link>

      <Link to='/login' style={ { textDecoration: 'none' } }>
        <Button variant='outlined'
          sx={ {
            width: '320px', borderRadius: '0px', m: '5px', p: '10px',
            border: '1px solid #295252', color: '#295252'
          } }>Back To Login</Button>
      </Link>
    </Box>
  );
};


// rendering

function index() {
  return (
    <Formik
      initialValues={ forgotPasswordInitialValues }
      validationSchema={ validationSchema }
      onSubmit={ submitHandler }>

      { ({ formik, values }) => (
        <Form>

          <Box className='form--container'
            sx={ { p: '8px 0' } }>

            <FormBox />
            <ButtonBox />

          </Box>

        </Form>
      ) }
    </Formik>
  );
}

export default index;
