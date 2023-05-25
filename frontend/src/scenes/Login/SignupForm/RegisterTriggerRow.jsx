import React from 'react';
import { Box } from '@mui/material';
// from file
import { Block, Sentence, TriggerLink } from '../reusableItems/TriggerRowItems';

// rendering

function RegisterTriggerRow(props) {
    return (
        <Box
            className='login--trigger--row'
            sx={{
                m: '10px',
                p: '20px 0'
            }}>

            <Block>
                <Sentence>Have an Account?</Sentence>
                <TriggerLink callbackFn={props.RegFormSwitch} />
            </Block>

        </Box>
    );
}

export default RegisterTriggerRow;
