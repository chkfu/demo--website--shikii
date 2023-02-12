import React from 'react';
import { Box, Typography } from '@mui/material';


// components

const Progressing = ({ totalPage, currStep }) => {
    const progressingPercentage = (Number(currStep) - 1) / (totalPage - 1);
    return (
        <Box sx={ {
            position: 'absolute', background: `linear-gradient(to top right, #295252 0%, #394545 65%)`, top: '50%', height: '4px', zIndex: '-1',
            width: `${progressingPercentage}`, transition: 'width 2s'
        } }></Box>
    );
};

const StepItem = ({ step, title, currStep, setCurrStep }) => {

    return (
        <Box
            data-title='Confirmation'
            sx={ {
                display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',
                width: '50px', height: '50px', borderRadius: '100%',
                background: Number(currStep) >= Number(step) ? `linear-gradient(to top right, #295252 0%, #394545 65%)` : '#dee2e6',
                color: Number(currStep) >= Number(step) ? '#dee2e6' : '#adb5bd'
            } }
            onClick={ async () => { if (step < currStep) return setCurrStep(step.toString()); } }
        >
            <Typography>{ step }</Typography>
            <Typography sx={ {
                position: 'absolute', top: '75px', fontSize: '16px',
                color: Number(currStep) >= Number(step) ? '#295252' : '#adb5bd'
            } }>
                { title }
            </Typography>

        </Box >
    );
};


// rendering

function ProgressionBar({ totalPage, currStep, setCurrStep }) {

    // rendering
    return (
        <Box
            className='format--container'
            sx={ { display: 'flex', justifyContent: 'center' } }>

            <Box
                className='section--container'
                sx={ {
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '400px', height: '100px',
                    '::before': {
                        content: '""', position: 'absolute', backgroundColor: '#dee2e6', width: '100%', height: '4px', top: '50%', zIndex: '-2'
                    }
                } } >

                <Progressing currStep={ currStep } totalPage={ totalPage } />

                <Box
                    className='steps-container'
                    sx={ { display: 'flex', justifyContent: 'space-between', width: '400px' } }>
                    <StepItem step='1' title='Review' currStep={ currStep } setCurrStep={ setCurrStep } />
                    <StepItem step='2' title='Contact' currStep={ currStep } setCurrStep={ setCurrStep } />
                    <StepItem step='3' title='Pay' currStep={ currStep } setCurrStep={ setCurrStep } />
                </Box>

            </Box>

        </Box >
    );
}

export default ProgressionBar;
