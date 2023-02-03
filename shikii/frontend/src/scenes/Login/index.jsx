// from package
import React, { useState } from 'react';
import { Box } from '@mui/material';
// from file
import LoginContainer from './LoginForm/LoginContainer';
import RegisterContainer from './SignupForm/RegisterContainer';
import './css/login.css';


function Login() {
  // responsive design
  const [loginChosen, setLoginChosen] = useState(true);
  const RegFormSwitch = () => {
    loginChosen === true ? setLoginChosen(false) : setLoginChosen(true);
  };
  // rendering
  return (
    <Box
      className='login--page--section'
      sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      } }>

      { loginChosen === true ? <LoginContainer RegFormSwitch={ RegFormSwitch } /> : <RegisterContainer RegFormSwitch={ RegFormSwitch } /> }
    </Box >
  );
}

export default Login;