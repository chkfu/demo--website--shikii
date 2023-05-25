// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import ContainedButton from '../../../components/Button/ContainedButton';


// styles 
const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    mb: '40px'
};

const ButtonSectionStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '500px'
};


// components 

const BackBtn = ({ setCurrStep }) => {
    return (
        <ContainedButton
            text='Back'
            callbackFn={
                async () => setCurrStep(prev => (Number(prev) - 1).toString()) }
        />
    );
};

const NextBtn = ({ setCurrStep }) => {
    return (
        <ContainedButton
            text='Next'
            callbackFn={
                async () => setCurrStep(prev => (Number(prev) + 1).toString()) }
        />
    );
};

const SubmitBtn = ({ setCurrStep }) => {
    return (
        <ContainedButton
            type="submit"
            text='Next'
            callbackFn={
                async () => setCurrStep(prev => (Number(prev) + 1).toString()) } />
    );
};


// rendering

function ButtonColumn({ currStep, setCurrStep }) {
    return (
        <Box sx={ ContainerStyle }>
            <Box sx={ ButtonSectionStyle }>
                { currStep > "1" && <BackBtn setCurrStep={ setCurrStep } /> }
                { currStep === "1" && <NextBtn setCurrStep={ setCurrStep } /> }
                { currStep === "2" && <SubmitBtn setCurrStep={ setCurrStep } /> }
            </Box>
        </Box >
    );
};

export default ButtonColumn;
