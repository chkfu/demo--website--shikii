// from package
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import SceneContainer from '../Container/SceneContainer';
import InputFieldReuse from '../Formik/InputFieldReuse';



// formik and yup basic settings
const initialValues = {
  firstName: "",
  lastName: ""
};

// styles
const ContainerStyle = {
  backgroundColor: '#E3E0D0',
  boxShadow: '2',
  width: '500px',
  minHeight: '400px',
  m: '40px auto',
  p: '60px 40px'
};

const IconSectionStyle = {
  boxShadow: '2',
  backgroundColor: 'white',
  width: '180px',
  height: '180px',
  m: '20px auto',
  borderRadius: '100%'
};

const FormBoxContainer = {
  display: 'grid',
  gridTemplateColumns: "1fr 1fr"
};


// UserProfile.jsx
function UserProfile() {

  // data-fetching
  const userId = localStorage.getItem('userId');

  const { data, error, isLoading, isError } = useQuery('getCurrUserDetail', async () => {
    return await axios(`http://127.0.0.1:3002/api/v1/users/${userId}`);
  });
  if (isLoading) {
    console.log('Loading...');
  }
  if (isError) {
    console.log(error);
  }

  // state management
  const [fnameValue, setFnameValue] = useState();
  const [lnameValue, setLnameValue] = useState();
  const [genderValue, setGenderValue] = useState();
  const [dateOfBirthValue, setDateOfBirthValue] = useState();


  // components


  const IconSection = () => {
    return (
      <Box sx={ IconSectionStyle }>

      </Box>
    );
  };

  const FormSection = () => {
    return (
      <Formik
        initialValues={ initialValues }>
        { ({ formik, values }) => (
          <Form>
            <Box sx={ FormBoxContainer }>
              <FirstNameElement />
              <LastNameElement />
            </Box>
          </Form>
        ) }
      </Formik>
    );
  };

  const FirstNameElement = () => {
    return (
      <Grid>
        <InputFieldReuse
          label='First Name'
          name='firstName'
          type='text'
          value={ initialValues.firstName } />
      </Grid>
    );
  };

  const LastNameElement = () => {
    return (
      <Grid>
        <InputFieldReuse
          label='Last Name'
          name='lastName'
          type='text'
          value={ initialValues.lastName } />
      </Grid>
    );
  };


  // rendering
  return (
    <SceneContainer>
      <Box sx={ ContainerStyle }>
        <IconSection />
        <FormSection />
      </Box>
    </SceneContainer>
  );
}

export default UserProfile;
