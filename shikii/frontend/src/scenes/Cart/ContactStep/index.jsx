// from package
import React from 'react';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// from file
import InputFieldReuse from '../../../components/Formik/InputFieldReuse';
import ButtonColumn from '../ButtonColumn';


function ContactStep({ totalPage, currPage, setCurrpage }) {

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


    // rendering
    return (
        <Box className='format--container' sx={{ display: 'flex', justifyContent: 'center', m: '20px' }}>
            <Box className='form--frame' sx={{ boxShadow: '2' }}>

                <Formik
                    initialValues={ContactInitialValues}
                    validationSchema={ContactValidationSchema}
                    onSubmit={async (values) => {
                        console.log(values);
                    }}>

                    {({ formik, values }) =>
                    (<Form>

                        <Box className='address--container'
                            sx={{ p: '20px 40px', width: '500px' }}>
                            <InputFieldReuse label='Receiver' name='reciever' type='text' />
                            <InputFieldReuse label='Address 1' name='addressOne' type='text' />
                            <InputFieldReuse label='Address 2' name='addressTwo' type='text' />
                            <Box sx={{ display: 'flex' }}>
                                <InputFieldReuse label='Postcode' name='addressPostcode' type='text' />
                                <InputFieldReuse label='City' name='addressCity' type='text' />
                            </Box>
                        </Box>

                        <ButtonColumn />

                    </Form>
                    )}

                </Formik>
            </Box>
        </Box>

    );
}

export default ContactStep;
