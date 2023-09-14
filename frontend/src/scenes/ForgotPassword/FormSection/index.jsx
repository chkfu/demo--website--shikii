// from package
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// from file
import InputFieldReuse from '../../../components/Formik/InputFieldReuse';
import { BACKEND_ROUTE } from '../../../theme/api-links';



// styles

const FormBoxStyle = {
  display: 'grid',
  gridTemplateRows: '1fr 3fr',
  justifyItems: "left",
  p: '20px 10px'
};

const LabelStyle = {
  padding: '0 10px',
  fontSize: '16px'
};

const InputBoxStyle = {
  width: '350px'
};

const BtnBoxStyle = {
  p: '20px'
};

const LinkStyle = {
  textDecoration: 'none'
};

const BtnStyle = {
  width: '320px',
  borderRadius: '0px',
  m: '5px',
  p: '10px',
  backgroundColor: '#295252',
  color: 'white',
  ':hover': {
    backgroundColor: '#1F3D3D'
  }
};

const FormStyle = {
  p: '8px 0'
};


// formik and yup settings

const forgotPasswordInitialValues = {
  email: ""
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('* Please enter the email address.')
});

const submitHandler = async (values) => {
  await axios.post(`${BACKEND_ROUTE}/api/v1/users/forgotPassword`, values);
};


//  components

const FormBox = ({ values }) => {
  return (
    <Box sx={ FormBoxStyle }>

      <label htmlFor='reset-email' style={ LabelStyle }>
        Enter email address
      </label>

      <Box sx={ InputBoxStyle }>
        <InputFieldReuse id='reset-email' name='email' text='email' />
      </Box>

    </Box>
  );
};

const ButtonBox = ({ values }) => {
  return (
    <Box className='button--box' sx={ BtnBoxStyle }>

      <Link to='/testingAnnouncement' style={ LinkStyle }>
        <Button type='submit' variant='contained' sx={ BtnStyle }>
          Request reset link
        </Button>
      </Link>

      <Link to='/login' style={ LinkStyle }>
        <Button variant='outlined'
          sx={ BtnStyle }>
          Back To Login
        </Button>
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
          <Box sx={ FormStyle }>
            <FormBox />
            <ButtonBox />
          </Box>
        </Form>
      ) }
    </Formik>
  );
}

export default index;
