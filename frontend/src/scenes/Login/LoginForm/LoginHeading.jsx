// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import Logo from '../../../components/Logo/Logo';



// styles

const BoxStyle = {
    mt: '20px',
    p: '10px',
    height: '80px',
    color: '#49453F',
    filter: 'brightness(0.4)',
    overflow: 'hidden'
};

// rendering
function LoginHeading() {
    return (
        <Box sx={ BoxStyle }>
            <Logo />
            <Typography>
                Login to Shikii Account
            </Typography>
        </Box>
    );
}

export default LoginHeading;
