// from package
import React from 'react';
import { Box, Divider } from '@mui/material';
// from file
import RegisterHeading from './RegisterHeading';
import RegisterFormik from './RegisterFormik';
import RegisterTriggerRow from './RegisterTriggerRow';

function RegisterContainer(props) {
    return (
        <Box
            className='register--container'
            sx={{
                p: '30px',
                width: '450px',
                minHeight: '600px',
                boxShadow: 4,
                backgroundColor: 'white',
                opacity: '0.9'
            }}>

            <RegisterHeading />
            <RegisterFormik />

            <Divider />

            <RegisterTriggerRow RegFormSwitch={props.RegFormSwitch} />

        </Box>
    );
}

export default RegisterContainer;
