// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import Logo from '../../../components/Logo/Logo';


// styles
const HeaderStyle = {
    mt: '20px',
    p: '10px',
    height: '80px',
    color: '#49453F',
    filter: 'brightness(0.4)'
};


// rendering
function RegisterHeading() {
    return (
        <Box sx={ HeaderStyle }>
            <Logo />
            <Typography>
                Get your Account a minute
            </Typography>
        </Box>
    );
}

export default RegisterHeading;
