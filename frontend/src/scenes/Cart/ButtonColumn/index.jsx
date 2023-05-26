// from package
import React from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrStep, reduceCurrStep } from './../../../../redux/reducers/cartSlice';
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

const BackBtn = () => {
    // redux
    const currStep = useSelector(state => state.cart.currStep);
    const dispatch = useDispatch();
    // render
    return (
        <ContainedButton
            text='Back'
            callbackFn={ () => dispatch(reduceCurrStep()) }
        />
    );
};

const NextBtn = () => {
    // redux
    const dispatch = useDispatch();
    // render
    return (
        <ContainedButton
            text='Next'
            callbackFn={ () => dispatch(addCurrStep()) }
        />
    );
};

const SubmitBtn = () => {
    // redux
    const dispatch = useDispatch();
    // render
    return (
        <ContainedButton
            type="submit"
            text='Next'
            callbackFn={ () => dispatch(addCurrStep()) } />
    );
};


// rendering

function ButtonColumn() {
    // redux
    const currStep = useSelector(state => state.cart.currStep);
    // render
    return (
        <Box sx={ ContainerStyle }>
            <Box sx={ ButtonSectionStyle }>
                { currStep > 1 && <BackBtn /> }
                { currStep === 1 && <NextBtn /> }
                { currStep === 2 && <SubmitBtn /> }
            </Box>
        </Box >
    );
};

export default ButtonColumn;
