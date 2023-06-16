// from package
import React from 'react';
import { Box, Divider } from '@mui/material';
// from file
import RegisterHeading from './RegisterHeading';
import RegisterFormik from './RegisterFormik';
import RegisterTriggerRow from './RegisterTriggerRow';



// styles

const ContainerStyle = {
    p: '30px',
    width: '450px',
    minHeight: '600px',
    boxShadow: 4,
    backgroundColor: 'white',
    opacity: '0.9'
};

// rendering

function RegisterContainer(RegFormSwitch) {
    return (
        <Box sx={ ContainerStyle }>
            <RegisterHeading />
            <RegisterFormik />

            <Divider />

            <RegisterTriggerRow RegFormSwitch={ RegFormSwitch } />
        </Box>
    );
}

export default RegisterContainer;
