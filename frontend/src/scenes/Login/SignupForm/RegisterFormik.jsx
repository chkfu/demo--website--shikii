import React from 'react';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// from file
import InputFieldReuse from '../../../components/Formik/InputFieldReuse';
import SelectFieldReuse from '../../../components/Formik/SelectFieldReuse';
import ContainedButton from '../../../components/Button/ContainedButton';
import SubmissionButton from '../../../components/Button/SubmissionButton';
import { setCurrRegPage } from './../../../../redux/reducers/authenticationSlice';


// formik and yup basic setting
const RegisterInitialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    passwordConfirm: ""
};

const RegisterValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('* First Name is required.'),
    lastName: Yup.string().required('* Last Name is required.'),
    gender: Yup.string(),
    age: Yup.number().positive().integer(),
    email: Yup
        .string()
        .email('* Email Address is invalid.')
        .required('* Email Address is required.'),
    password: Yup
        .string()
        .min(8, '* Password has at least 8 charaters.')
        .required('* Password is required.'),
    passwordConfirm: Yup
        .string()
        .oneOf([Yup.ref('password'), null], '* Password Confirm does not match.')
        .required('* Password Confirm is required.'),
});

//  rendering

function RegisterFormik() {

    // redux
    const currRegPage = useSelector(state => state.authentication.currRegPage);
    const dispatch = useDispatch();
    // redirect
    const navigate = useNavigate();
    // render
    return (
        <Formik
            initialValues={ RegisterInitialValues }
            validationSchema={ RegisterValidationSchema }
            onSubmit={ async (values) => {
                await axios.post('http://127.0.0.1:3002/api/v1/users/signup', values);
                dispatch(setCurrRegPage('3'));
            } }>

            { ({ formik, values }) => (
                <Box className='form--format--container' sx={ { p: '10px 20px' } }>

                    <Form>

                        <Box className='page-1' sx={ {
                            display: currRegPage === 1 ? 'static' : 'none'
                        } }>
                            <Box
                                className='form--format--container'
                                sx={ { display: 'flex', justifyContent: 'space-between' } }>

                                <Box sx={ { width: '50%' } }>
                                    <InputFieldReuse sx={ { width: '100%' } } name='firstName' type='firstName' label='First Name' />
                                </Box>

                                <Box sx={ { width: '50%' } }>
                                    <InputFieldReuse name='lastName' type='lastName' label='Last Name' />
                                </Box>
                            </Box>

                            <Box
                                className='form--format--container'
                                sx={ { display: 'flex', justifyContent: 'space-between' } }>

                                <Box sx={ {
                                    width: '50%', '&.MuiBox-root': { textAlign: 'left', p: '10px' }
                                } }>
                                    <SelectFieldReuse name='gender' label='Gender' options={ ['male', 'female'] } />
                                </Box>

                                <Box sx={ {
                                    width: '50%', '&.MuiBox-root': { textAlign: 'left' }
                                } }>
                                    <InputFieldReuse name='age' label='Age' type='number' />
                                </Box>

                            </Box>

                            <Box
                                sx={ { display: 'flex', justifyContent: 'right', mt: '10px', p: '10px' } }>
                                <ContainedButton
                                    text='Next' callbackFn={ () => { dispatch(setCurrRegPage(2)); } }>
                                    Next
                                </ContainedButton>
                            </Box>


                        </Box>

                        <Box className='page--2' sx={ {
                            display: currRegPage === 2 ? 'static' : 'none'
                        } }>
                            <InputFieldReuse name='email' type='email' label='Email Address' />
                            <InputFieldReuse name='password' type='password' label='Password' />
                            <InputFieldReuse name='passwordConfirm' type='password' label='Password Confirm' />

                            <SubmissionButton text='Register' />

                        </Box>

                        <Box className='page--3'
                            sx={ {
                                display: currRegPage === '3' ? 'static' : 'none'
                            } }>

                            <Box sx={ { height: '200px', display: 'flex', justifyContent: 'center', mt: '20px' } }>
                                Thank you for your registration.
                            </Box>

                            <Box sx={ { p: '20px', display: 'flex', justifyContent: 'center' } }>
                                <Link to='/' style={ { textDecoration: 'none' } }> <ContainedButton text='Return' /> </Link>
                            </Box>
                        </Box>

                    </Form>
                </Box >
            ) }
        </Formik >
    );
}

export default RegisterFormik;;
