// from package
import React from 'react';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// from file
import InputFieldReuse from '../../../components/Formik/InputFieldReuse';


// formik and yup settings

const ContactInitialValues = {
    receiver: "",
    addressOne: "",
    addressTwo: "",
    addressPostcode: "",
    addressCity: "",
};

const ContactValidationSchema = Yup.object().shape({
    reveiver: Yup.string(),
    addressOne: Yup.string().required('Delivery Address is required.'),
    addressTwo: Yup.string(),
    addressPostcode: Yup.string().required('Postcode is required.'),
    addressCity: Yup.string().required('City is required.'),
});


// styles

const FormatContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    m: '20px'
};

const FormFrameStyle = {
    boxShadow: '2'
};

const DetailBoxStyle = {
    p: '20px 40px', width: '500px'
};

const FlexBoxStyle = {
    display: 'flex'
};


// components

const AddressForm = () => {
    return (
        <Formik
            initialValues={ ContactInitialValues }
            validationSchema={ ContactValidationSchema }
            onSubmit={ async (values) => {
                console.log(values);
            } }>
            { ({ formik, values }) =>
            (<Form>
                <Box className='address--container'
                    sx={ DetailBoxStyle }>
                    <InputFieldReuse
                        label='Receiver'
                        name='reciever'
                        type='text' />
                    <InputFieldReuse
                        label='Address 1'
                        name='addressOne'
                        type='text' />
                    <InputFieldReuse
                        label='Address 2'
                        name='addressTwo'
                        type='text' />
                    <Box sx={ FlexBoxStyle }>
                        <InputFieldReuse
                            label='Postcode'
                            name='addressPostcode'
                            type='text' />
                        <InputFieldReuse
                            label='City'
                            name='addressCity'
                            type='text' />
                    </Box>
                </Box>
            </Form>
            ) }
        </Formik>
    );
};

// rendering

function ContactStep() {
    return (
        <Box sx={ FormatContainerStyle }>
            <Box sx={ FormFrameStyle }>
                <AddressForm />
            </Box>
        </Box >
    );
}

export default ContactStep;
