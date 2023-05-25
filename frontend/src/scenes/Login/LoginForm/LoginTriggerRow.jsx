import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import { Block, Sentence, TriggerLink } from '../reusableItems/TriggerRowItems';

// rendering

function LoginTriggerRow(props) {
    return (
        <Box
            className='login--trigger--row'
            sx={ {
                m: '10px',
                p: '20px 0'
            } }>

            <Block>
                <Sentence>Forget Password?</Sentence>
                <Link to='/forgotPassword' style={ { textDecoration: 'none' } }>  <TriggerLink /></Link>
            </Block>

            <Block>
                <Sentence>Create your Account?</Sentence>
                <TriggerLink callbackFn={ props.RegFormSwitch } />
            </Block>

        </Box>
    );
}

export default LoginTriggerRow;
