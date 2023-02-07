// from package 
import React from 'react';
import { Box } from '@mui/material';
import { Field } from 'formik';
// from file
import ErrorMessageReuse from './ErrorMessageReuse';

// rendering 

function InputFieldReuse({ label, name, type, placeholder = '' }) {
    return (
        <Box
            sx={ {
                display: 'block',
                p: '5px 5px',
                '&.MuiBox-root': {
                    textAlign: 'left',
                }
            } }>
            <label
                style={ { display: 'inline-block', textAlign: 'left', fontSize: '16px' } }
                htmlFor={ name }>{ label }</label>
            <Field
                style={ { width: '100%', height: '50px', fontSize: '18px', textAlign: 'left', paddingLeft: '10px' } }
                id={ name }
                name={ name }
                type={ type }
                placeholder={ placeholder } />

            <ErrorMessageReuse name={ name } />
        </Box>
    );
};

export default InputFieldReuse;
