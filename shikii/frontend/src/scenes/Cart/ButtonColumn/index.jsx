import React from 'react';
import { Box, Button } from '@mui/material';
// from file
import ContainedButton from '../../../components/Button/ContainedButton';
import SubmissionButton from './../../../components/Button/SubmissionButton';

function ButtonColumn({ currStep, setCurrStep }) {

    return (
        <Box className='format--container'
            sx={{ display: 'flex', justifyContent: 'center', mb: '40px' }}>
            <Box
                className='Button Container'
                sx={{
                    display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '500px'
                }}>

                {
                    currStep > "1" &&
                    (<ContainedButton text='Back'
                        callbackFn={
                            async () => setCurrStep(prev => (Number(prev) - 1).toString())}
                    />)
                }
                {
                    currStep === "1" &&
                    (<ContainedButton text='Next'
                        callbackFn={
                            async () => setCurrStep(prev => (Number(prev) + 1).toString())}
                    />)
                }
                {
                    currStep === "2" &&
                    (<ContainedButton type="submit" text='Next' callbackFn={
                        async () => setCurrStep(prev => (Number(prev) + 1).toString())} />)
                }






            </Box>

        </Box >
    );
};

export default ButtonColumn;
