// from package
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
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
  const loginChosen = useSelector(state => state.authentication.loginFormChosen);
  // rendering
  return (
    <Box className='login--page--section' sx={ SectionStyle } >
      { loginChosen === true ?
        <SectionScrollingIn>
          <LoginContainer />
        </SectionScrollingIn>
        :
        <SectionScrollingIn>
          <RegisterContainer />
        </SectionScrollingIn>
      }
    </Box >
  );
}

export default Login;