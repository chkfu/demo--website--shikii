// from package 
import React from 'react';
import { Link } from 'react-router-dom';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
// from file
import '../css/navbar.css';
import iconStyle from './ReusableItems/iconStyle';
import IconContainer from './ReusableItems/IconContainer';
import FunctionIcons from './ReusableItems/FunctionIcons';
import FunctionTexts from './ReusableItems/FunctionTexts';

function LoginComponent() {
  return (
    <Link
      to='/login'
      style={{ color: '#908B84', textDecoration: 'none' }}>
      <IconContainer>
        <FunctionIcons>
          <LoginOutlinedIcon sx={iconStyle} />
        </FunctionIcons>
        <FunctionTexts>Login</FunctionTexts>
      </IconContainer>
    </Link>
  );
};

export default LoginComponent;