// from package
import React, { useState } from 'react';
import { Box } from '@mui/material';
// from file
import SectionScrollingIn from '../../components/Animation/SectionScrollingIn';
import LoginContainer from './LoginForm/LoginContainer';
import RegisterContainer from './SignupForm/RegisterContainer';
import './css/login.css';

// styles

const SectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// rendering

function Login() {
  // responsive design
  const [loginChosen, setLoginChosen] = useState(true);
  const RegFormSwitch = () => {
    loginChosen === true ? setLoginChosen(false) : setLoginChosen(true);
    console.log(loginChosen);
  };
  // rendering
  return (
    <Box className='login--page--section' sx={ SectionStyle } >
      { loginChosen === true ?
        <SectionScrollingIn>
          <LoginContainer RegFormSwitch={ RegFormSwitch } />
        </SectionScrollingIn>
        :
        <SectionScrollingIn>
          <RegisterContainer RegFormSwitch={ RegFormSwitch } />
        </SectionScrollingIn>
      }
    </Box >
  );
}

export default Login;