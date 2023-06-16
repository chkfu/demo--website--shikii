// from package
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import { Block, Sentence, TriggerLink } from '../reusableItems/TriggerRowItems';


// styles

const RowStyle = {
    m: '10px',
    p: '20px 0'
};

const LinkStyle = {
    textDecoration: 'none'
};


// rendering

function LoginTriggerRow(props) {
    return (
        <Box sx={ RowStyle }>
            <Block>
                <Sentence>
                    Forget Password?
                </Sentence>
                <Link to='/forgotPassword' style={ LinkStyle }>
                    <TriggerLink />
                </Link>
            </Block>

            <Block>
                <Sentence>
                    Create your Account?
                </Sentence>
                <TriggerLink callbackFn={ props.RegFormSwitch } />
            </Block>
        </Box>
    );
}

export default LoginTriggerRow;
