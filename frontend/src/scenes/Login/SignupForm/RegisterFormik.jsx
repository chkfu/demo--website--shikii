// from package
import React from 'react';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
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


// styles
const FormatContainerStyle = {
    p: '10px 20px'
};

const Page_ExtendedBoxStyle = {
    display: 'static'
};

const Page_ShrinkedBoxStyle = {
    display: 'none'
};

const Page01_InnerBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between'
};

const InputContainerStyle = {
    width: '50%'
};

const fnameInputStyle = {
    width: '100%'
};

const Page01_SelectStyle = {
    width: '50%',
    '&.MuiBox-root': {
        textAlign: 'left',
        p: '10px'
    }
};

const Page01_BtnBoxStyle = {
    display: 'flex',
    justifyContent: 'right',
    mt: '10px',
    p: '10px'
};


const Page03_InnerBoxStyle = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    mt: '20px'
};

const Page03_LinkBoxStyle = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    mt: '20px'
};

const LinkStyle = {
    textDecoration: 'none'
};

// components

const Page01 = () => {
    //  redux
    const currRegPage = useSelector(state => state.authentication.currRegPage);
    const dispatch = useDispatch();
    // function
    const ClickHandler = () => {
        dispatch(setCurrRegPage(2));
    };
    //   render
    return (
        <Box sx={ currRegPage === 1 ? Page_ExtendedBoxStyle : Page_ShrinkedBoxStyle }>
            <Box sx={ Page01_InnerBoxStyle }>
                {/* name column */ }
                <Box sx={ InputContainerStyle }>
                    <InputFieldReuse
                        sx={ fnameInputStyle }
                        name='firstName'
                        type='firstName'
                        label='First Name' />
                </Box>
                <Box sx={ InputContainerStyle }>
                    <InputFieldReuse
                        name='lastName'
                        type='lastName'
                        label='Last Name' />
                </Box>
            </Box>
            {/* select column */ }
            <Box sx={ Page01_InnerBoxStyle }>
                <Box sx={ Page01_SelectStyle }>
                    <SelectFieldReuse
                        name='gender'
                        label='Gender'
                        options={ ['male', 'female'] } />
                </Box>
                <Box sx={ Page01_SelectStyle }>
                    <InputFieldReuse
                        name='age'
                        label='Age'
                        type='number' />
                </Box>
            </Box>
            {/* button column */ }
            <Box
                sx={ Page01_BtnBoxStyle }>
                <ContainedButton
                    text='Next'
                    callbackFn={ ClickHandler }>
                    Next
                </ContainedButton>
            </Box>
        </Box >
    );
};


const Page02 = () => {
    // redux
    const currRegPage = useSelector(state => state.authentication.currRegPage);
    // render
    return (
        <Box sx={ currRegPage === 2 ? Page_ExtendedBoxStyle : Page_ShrinkedBoxStyle }>
            <InputFieldReuse name='email' type='email' label='Email Address' />
            <InputFieldReuse name='password' type='password' label='Password' />
            <InputFieldReuse name='passwordConfirm' type='password' label='Password Confirm' />
            <SubmissionButton text='Register' />
        </Box>
    );
};

const Page03 = () => {
    // redux
    const currRegPage = useSelector(state => state.authentication.currRegPage);
    const dispatch = useDispatch();
    // render
    return (
        <Box sx={ currRegPage === 3 ? Page_ExtendedBoxStyle : Page_ShrinkedBoxStyle }>
            <Box sx={ Page03_InnerBoxStyle } >
                Thank you for your registration.
            </Box>
            <Box sx={ Page03_LinkBoxStyle }>
                <Link to='/' style={ LinkStyle }>
                    <ContainedButton
                        text='Return'
                        callbackFn={ () => {
                            dispatch(setCurrRegPage(1));
                            console.log(currRegPage);
                        } } />
                </Link>
            </Box>
        </Box >
    );
};


//  rendering

function RegisterFormik() {
    // redux
    const currRegPage = useSelector(state => state.authentication.currRegPage);
    const dispatch = useDispatch();
    // render
    return (
        <Formik
            initialValues={ RegisterInitialValues }
            validationSchema={ RegisterValidationSchema }
            onSubmit={ async (values) => {
                dispatch(setCurrRegPage(3));
                await axios.post('http://127.0.0.1:3002/api/v1/users/signup', values);
            } }>

            { ({ formik, values }) => (
                <Box sx={ FormatContainerStyle }>
                    <Form>
                        <Page01 />
                        <Page02 />
                        <Page03 />
                    </Form>
                </Box >
            ) }
        </Formik >
    );
}

export default RegisterFormik;;
