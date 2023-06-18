// from package
import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


// rendering

function PersonalDataSection({ data }) {

  // formik and yup basic setting
  const UserDataInitialValues = {
    firstName: data.data.data.firstName,
    lastName: data.data.data.lastName,
    gender: data.data.data.gender,
    age: data.data.data.age,
    email: data.data.data.email,
  };

  const UserDataValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('* First Name is required.'),
    lastName: Yup.string().required('* Last Name is required.'),
    gender: Yup.string(),
    age: Yup.number().positive().integer(),
    email: Yup
      .string()
      .email('* Email Address is invalid.')
      .required('* Email Address is required.'),
  });

  // render
  return (
    <Formik
      initialValues={ UserDataInitialValues }
      validationSchema={ UserDataValidationSchema }
      onSubmit={ async (values) => {
        try {
          await axios.patch('http://127.0.0.1:3002/api/v1/users/update-current-user', values, {
            credentials: 'include',
            withCredentials: true
          });
          alert('Profile updated successfully...');
        } catch (error) {
          alert('Something went wrong...');
        }
      } }>
      { ({ formik, values }) => (
        <Form style={ FormStyle }>
          <Row_01 />
          <Row_02 />
          <Row_03 data={ data } />
          <Row_04 />
          <ButtonBox />
        </Form>
      ) }
    </Formik>
  );
}

export default PersonalDataSection;



// components

const Row_01 = () => {
  return (
    <div style={ RowBoxStyle }>
      <div className='row-01-box-left' style={ RowInsideBoxStyle }>
        <label htmlFor='firstName' style={ LabelStyle }>
          First Name
        </label>
        <Field style={ InputStyle }
          id='firstName'
          name='firstName'
          type='text' />
      </div>
      <div className='row-01-box-right' style={ RowInsideBoxStyle }>
        <label htmlFor='lastName' style={ LabelStyle }>
          Last Name
        </label>
        <Field style={ InputStyle }
          id='lastName'
          name='lastName'
          type='text'
        />
      </div>
    </div>
  );
};

const Row_02 = () => {
  return (
    <div style={ RowBoxStyle }>
      <div className='row-02-box-left' style={ RowInsideBoxStyle }>
        <label htmlFor='fname' style={ LabelStyle }>
          Gender
        </label>
        <Field style={ InputStyle }
          as='select'
          id='gender'
          name='gender'
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='none'>Prefer not to say</option>
        </Field>
      </div>
      <div className='row-02-box-right' style={ RowInsideBoxStyle }>
        <label htmlFor='lastName' style={ LabelStyle }>
          Age
        </label>
        <Field style={ InputStyle }
          id='age'
          name='age'
          type='number'
        />
      </div>
    </div>
  );
};

const Row_03 = ({ data }) => {
  return (
    <div style={ RowInsideBoxStyle }>
      <label htmlFor='role' style={ LabelStyle }>
        User
      </label>

      { data.data.data.role === 'user' ? (
        <Field style={ InputStyle } id='role' name='role' value='User' disabled />
      ) : (
        <Field style={ InputStyle }
          as='select'
          id='role'
          name='role'
          disabled
        >
          <option value='user'>User</option>
          <option value='staff'>Staff</option>
          <option value='admin'>Admin</option>
        </Field>
      ) }
    </div>
  );
};

const Row_04 = () => {
  return (
    <div style={ RowBoxStyle }>
      <div style={ LongInsideBoxStyle }>
        <label html='email' style={ LabelStyle }>
          Email
        </label>
        <Field style={ InputStyle }
          id='email' name='email' />
      </div>
    </div>
  );
};

const ButtonBox = () => {
  return (
    <div style={ BtnContainerStyle }>
      <button type='submit' style={ Btn01_Style }>
        Save
      </button>
    </div>
  );
};


// styles

const FormStyle = {
  border: '1px solid #CCCCCC',
  padding: '20px'
};

const RowBoxStyle = {
  display: 'flex',
};

const RowInsideBoxStyle = {
  display: 'block',
  padding: '10px 10px',
  width: '50%'
};

const LongInsideBoxStyle = {
  display: 'block',
  padding: '10px 10px',
  width: '100%'
};

const BtnContainerStyle = {
  width: '120px',
  padding: '20px',
  float: 'right',
  display: 'flex',
};

const LabelStyle = {
  display: 'block',
  textAlign: 'left',
  fontSize: '18px'
};

const InputStyle = {
  display: 'block',
  width: '98%',
  textAlign: 'left',
  padding: '5px 10px',
  fontSize: '18px'
};

const Btn01_Style = {
  display: 'block',
  margin: 'auto',
  padding: '8px 14px',
  backgroundColor: '#f59f00',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
};
