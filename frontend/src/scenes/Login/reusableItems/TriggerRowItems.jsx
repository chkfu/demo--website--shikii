import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginFormChosen } from '../../../../redux/reducers/authenticationSlice';


// styles

const BlockStyle = {
    display: 'flex'
};

const SentenceStyle = {
    p: '0 5px',
    fontSize: '16px',
    color: '#49453F'
};

const TriggerLinkStyle = {
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
};


export const Block = ({ children }) => {
    return (
        <Box sx={ BlockStyle }>
            { children }
        </Box>
    );
};

export const Sentence = ({ children }) => {
    return (
        <Typography sx={ SentenceStyle }>
            { children }
        </Typography>
    );
};

export const TriggerLink = () => {
    const loginFormChosen = useSelector(state => state.authentication.loginFormChosen);
    const dispatch = useDispatch();
    // render
    return (
        <Typography sx={ TriggerLinkStyle }
            onClick={ () => {
                dispatch(setLoginFormChosen(!loginFormChosen));
            } } >
            Click here.
        </Typography >
    );
};
