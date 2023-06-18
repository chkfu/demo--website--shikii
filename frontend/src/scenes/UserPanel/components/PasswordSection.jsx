import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

function PasswordSection() {

  const initialValues = {
    currPassword: "",
    newPassword: "",
    confirmPasswword: ""
  };

  return (
    <div>
      <Formik
        initialValues={ initialValues }
        onSubmit={ async (values) => {
          return await axios.patch('http://127.0.0.1:3002/api/v1/users/user-change-password', values, {
            credentials: 'include',
            withCredentials: true
          });
        } }>
        { ({ formik, values }) => (
          <Form style={ FormStyle }>
            <div style={ RowInsideBoxStyle }>
              <label style={ LabelStyle } htmlFor='currPassword'>
                Current Password
              </label>
              <Field style={ InputStyle }
                id='currPassword' name='currPassword' type='password' />
            </div>

            <div style={ RowInsideBoxStyle }>
              <label style={ LabelStyle } htmlFor='new_passwordnew_password'>
                New Password
              </label>
              <Field style={ InputStyle }
                id='newPassword' name='newPassword' type='password' />
            </div>

            <div style={ RowInsideBoxStyle }>
              <label style={ LabelStyle } htmlFor='confirmPassword'>
                Confirm Password
              </label>
              <Field style={ InputStyle }
                id='confirmPassword' name='confirmPassword' type='password' />
            </div>

            <div style={ BtnContainerStyle }>
              <button type='submit' style={ Btn01_Style }>
                Update
              </button>
            </div>

          </Form>
        ) }

      </Formik>
    </div>
  );
}

export default PasswordSection;


// styles

const FormStyle = {
  border: '1px solid #CCCCCC',
  padding: '20px'
};


const RowInsideBoxStyle = {
  display: 'block',
  padding: '10px 10px',
  width: '100%'
};


const BtnContainerStyle = {
  width: '160px',
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
