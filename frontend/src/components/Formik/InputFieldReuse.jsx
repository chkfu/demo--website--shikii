// from package 
import React from 'react';
import { Box } from '@mui/material';
import { Field } from 'formik';
// from file
import ErrorMessageReuse from './ErrorMessageReuse';


const ContainerStyle = {
    display: 'block',
    p: '5px 5px',
    '&.MuiBox-root': {
        textAlign: 'left',
    }
};

const LabelStyle = {
    display: 'inline-block',
    textAlign: 'left',
    fontSize: '16px'
};

const InputStyle = {
    width: '100%',
    height: '50px',
    fontSize: '18px',
    textAlign: 'left',
    paddingLeft: '10px'
};

// components

const Container = ({ children }) => {
    return (
        <Box sx={ ContainerStyle }>
            { children }
        </Box>
    );
};


// rendering 

function InputFieldReuse({ label, name, type, placeholder = '' }) {
    return (
        <Container>
            <label htmlFor={ name } style={ LabelStyle }>
                { label }
            </label>
            <Field
                id={ name }
                name={ name }
                type={ type }
                style={ InputStyle }
                placeholder={ placeholder } />
            <ErrorMessageReuse name={ name } />
        </Container>
    );
};

export default InputFieldReuse;
