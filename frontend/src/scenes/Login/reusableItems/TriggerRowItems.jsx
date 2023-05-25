import React from 'react';
import { Box, Typography } from '@mui/material';

export const Block = ({ children }) => {
    return <Box
        sx={{
            display: 'flex',
        }}>
        {children}
    </Box>;
};

export const Sentence = ({ children }) => {
    return <Typography sx={{
        p: '0 5px',
        fontSize: '16px',
        color: '#49453F',
    }}>{children}</Typography>;
};

export const TriggerLink = ({ callbackFn = async () => { return; } }) => {
    return <Typography sx={{
        p: '0 5px',
        fontSize: '16px',
        color: '#228be6',
        ':hover': {
            color: '#1971c2',
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        ':active': {
            transform: 'scale(0.98)'
        }
    }}
        onClick={callbackFn}>Click here.</Typography>;
};
