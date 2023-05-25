// from package
import React from 'react';
import { Box } from '@mui/system';
import { Field } from 'formik';


// styles

const LabelStyle = {
    display: 'inline-block',
    textAlign: 'left',
    fontSize: '16px'
};

const InputStyle = {
    width: '100%',
    height: '50px',
    fontSize: '18px'
};

// rendering

function SelectFieldReuse({ label, name, options }) {

    // components
    const Label = () => {
        return (
            <label htmlFor='gender' style={ LabelStyle }>
                { label }
            </label>
        );
    };

    const SelectForm = ({ children }) => {
        return (
            <Field
                as='select'
                id={ name }
                name={ name }
                style={ InputStyle }>
                { children }
            </Field>
        );
    };

    const Option = ({ key, value, text }) => {
        return (
            <option
                key={ key }
                value={ value }>
                { text }
            </option>
        );
    };


    // render
    return (
        <Box>
            <Label />
            <SelectForm>

                <Option
                    key='default'
                    value=''
                    text='- Please Select -' />

                { options.map((element) => {
                    return (
                        <Option
                            key={ `${name} ${element}` }
                            value={ element }
                            text={ element } />
                    );
                }) }

            </SelectForm>
        </Box>
    );
}

export default SelectFieldReuse;
