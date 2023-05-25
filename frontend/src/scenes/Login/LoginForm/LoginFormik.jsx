import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// from file
import InputFieldReuse from '../../../components/Formik/InputFieldReuse';
import SubmissionButton from '../../../components/Button/SubmissionButton';
// formik and yup basic setting

const LoginInitialValues = {
    email: "",
    password: ""
};

const LoginValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('* Email Address is invalid.')
        .required('* Email Address is required.'),
    password: Yup
        .string()
        .min(8, '* Password has at least 8 charaters.')
        .required('* Password is required.')
});


function LoginFormik() {

    // redirect
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={ LoginInitialValues }
            validationSchema={ LoginValidationSchema }
            onSubmit={ async (values) => {
                try {
                    return await axios.post('http://127.0.0.1:3002/api/v1/users/login', values, { withCredentials: true, credentials: 'include' })
                        .then((res) => {
                            if (res.data.status === 'success') {
                                localStorage.clear();
                                localStorage.setItem('loginStatus', true);
                                localStorage.setItem('userId', res.data.data.user._id);
                                localStorage.setItem('userIcon', res.data.data.user.coverImage);
                                return navigate('/');
                            }
                        });
                }
                catch (error) {
                    localStorage.clear();
                    alert('Email or Password is incorrect.  Please try again.');
                }
            } }>

            { ({ formik, values }) => (
                <Box className='form--format--container'
                    sx={ { p: '10px 20px' } }>
                    <Form>
                        <InputFieldReuse name='email' type='email' label='Email Address' />
                        <InputFieldReuse name='password' type='password' label='Password' />
                        <SubmissionButton text='Login' />
                    </Form>
                </Box>
            ) }

        </Formik >
    );
}

export default LoginFormik;;
