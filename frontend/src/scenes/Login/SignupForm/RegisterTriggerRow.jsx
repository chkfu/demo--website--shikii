// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import { Block, Sentence, TriggerLink } from '../reusableItems/TriggerRowItems';


// styles 
const RowStyle = {
    m: '10px',
    p: '20px 0'
};


// rendering

function RegisterTriggerRow() {
    return (
        <Box sx={ RowStyle }>
            <Block>
                <Sentence>
                    Have an Account?
                </Sentence>
                <TriggerLink />
            </Block>
        </Box>
    );
}

export default RegisterTriggerRow;
