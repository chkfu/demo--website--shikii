import React from 'react';
import { Box } from '@mui/system';
import { Field } from 'formik';

function SelectFieldReuse({ label, name, options }) {
    return (
        <Box>
            <label htmlFor='gender' style={ {
                display: 'inline-block', textAlign: 'left', fontSize: '16px'
            } }>
                { label }
            </label>

            <Field as='select' id={ name } name={ name } style={ { width: '100%', height: '50px', fontSize: '18px' } }>
                <option key='default' value=''>- Please Select -</option>
                { options.map((el) => {
                    return <option key={ `${name} ${el}` } value={ el }>{ el }</option>;
                }) }
            </Field>
        </Box>
    );
}

export default SelectFieldReuse;
