// from package
import React from 'react';
import { Box, Button } from '@mui/material';


// styles

const ContainerStyle = {
    mt: '20px',
    p: '10px'
};

const ButtonStyle = {
    p: '10px 50px',
    backgroundColor: '#295252',
    borderRadius: '0px',
    color: 'white',
    ':hover': { backgroundColor: '#1F3D3D' }
};


// rendering
function SubmissionButton({ text, callbackFn = () => { return; } }) {
    return (
        <Box sx={ ContainerStyle }>
            <Button
                type='submit'
                sx={ ButtonStyle }
                variant='contained'
                onClick={ callbackFn }>
                { text }
            </Button>
        </Box>
    );
}

export default SubmissionButton;
