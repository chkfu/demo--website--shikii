// from package
import React from 'react';
import { Box, Divider } from '@mui/material';
// from file
import LoginHeading from './LoginHeading';
import LoginFormik from './LoginFormik';
import LoginTriggerRow from './LoginTriggerRow';

// rendering
function LoginContainer(props) {
    return (
        <Box
            className='login--container'
            sx={ {
                p: '30px',
                width: '450px',
                minHeight: '600px',
                boxShadow: 4,
                backgroundColor: 'white',
                opacity: '0.9'
            } }>

            <LoginHeading />
            <LoginFormik />

            <Divider />

            <LoginTriggerRow RegFormSwitch={ props.RegFormSwitch } />

        </Box>
    );
}

export default LoginContainer;
