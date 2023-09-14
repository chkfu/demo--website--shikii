import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// from file
import InputFieldReuse from '../../../components/Formik/InputFieldReuse';
import SubmissionButton from '../../../components/Button/SubmissionButton';
import { BACKEND_ROUTE } from '../../../theme/api-links';

// styles 

const FormStyle = {
    p: '10px 20px'
};

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


// rendering

function LoginFormik() {

    // redirect
    const navigate = useNavigate();

    // function
    const SubmitHandler = async (values) => {
        try {
            return await axios.post(`${BACKEND_ROUTE}/api/v1/users/login`, values,
                {
                    withCredentials: true,
                    credentials: 'include'
                })
                .then((res) => {
                    if (res.data.status === 'success') {
                        // memorisation, avoid frequent data fetching
                        localStorage.clear();
                        localStorage.setItem('loginStatus', true);
                        localStorage.setItem('userId', res.data.data.user._id);
                        localStorage.setItem('userIcon', res.data.data.user.coverimage);
                        // refresh + redirect
                        navigate('/');
                        return window.location.reload();
                    }
                });
        }
        catch (error) {
            localStorage.clear();
            alert('Email or Password is incorrect.  Please try again.');
        }
    };

    // render
    return (
        <Formik
            initialValues={ LoginInitialValues }
            validationSchema={ LoginValidationSchema }
            onSubmit={ SubmitHandler }>

            { ({ formik, values }) => (
                <Box sx={ FormStyle }>
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
