import React from 'react';
import { Box, Button } from '@mui/material';


function SubmissionButton({ text, callbackFn = () => { return; } }) {
    return (
        <Box
            sx={{ mt: '20px', p: '10px' }}>
            <Button
                type='submit'
                sx={{
                    p: '10px 50px',
                    backgroundColor: '#295252',
                    borderRadius: '0px',
                    color: 'white',
                    ':hover': { backgroundColor: '#1F3D3D' },
                }}
                variant='contained'
                onClick={callbackFn}>{text}</Button>
        </Box>
    );
}

export default SubmissionButton;
