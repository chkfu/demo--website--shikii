// from package
import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// from file
import BarLeftItemLink from '../../ReusableItems/BarLeftItemLink';


// declaration 
const loginStatus = localStorage.getItem('loginStatus');

// styles
const ListStyle = {
  p: '5px 20px'
};

const LogoutBtnStyle = {
  fontSize: '18px',
  cursor: 'pointer'
};

const allCookies = document.cookie;
console.log(allCookies);

// components

const Subtitle = () => {
  return (
    <Typography
      variant='h6'
      sx={ { p: '5px' } }>
      User
    </Typography>
  );
};

const LoginBtn = () => {

  return (
    <ListItem>
      <BarLeftItemLink
        to='/login'
        title='Login / Sign up' />
    </ListItem>
  );
};

const LogoutBtn = () => {
  // function
  const navigate = useNavigate();

  const LogoutHandler = async () => {
    // terminate storage and cookies]
    localStorage.clear();
    await axios.get('http://127.0.0.1:3002/api/v1/users/logout', { credentials: 'include', withCredentials: true });
    // refresh + redirect
    navigate('/');
    return window.location.reload();
  };
  // render
  return (
    <ListItem
      sx={ LogoutBtnStyle }
      onClick={ LogoutHandler }>
      Logout
    </ListItem >
  );
};

const FAQBtn = () => {
  return (
    <ListItem>
      <BarLeftItemLink
        to='/FAQ'
        title='FAQ' />
    </ListItem>
  );
};

const CartBtn = () => {
  return (
    <ListItem>
      <BarLeftItemLink
        to='/cart'
        title='Cart' />
    </ListItem>
  );
};


// rendering

function UserSection() {

  // get login sattus
  localStorage.getItem('loginStatus');

  return (
    <>
      <Subtitle />

      <List sx={ ListStyle } >
        { loginStatus ? <LogoutBtn /> : <LoginBtn /> }
        <FAQBtn />
        { loginStatus && <CartBtn /> }
      </List>
    </>
  );
}

export default UserSection;
