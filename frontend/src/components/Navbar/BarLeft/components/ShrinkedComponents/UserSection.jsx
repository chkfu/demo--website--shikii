// from package
import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
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
  const LogoutFunction = async () => {
    localStorage.clear();
    browser.cookies.remove({ name: 'jwt' });
    return navigate('/');
  };
  // render
  return (
    <ListItem
      sx={ LogoutBtnStyle }
      onClick={ LogoutFunction }>
      Logout
    </ListItem >
  );
};

const FAQBtn = () => {
  return (
    <ListItem>
      <BarLeftItemLink
        to='/testingAnnouncement'
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
  return (
    <>
      <Subtitle />

      <List sx={ ListStyle } >
        { !loginStatus ? <LoginBtn /> : <LogoutBtn /> }
        <FAQBtn />
        <CartBtn />
      </List>
    </>
  );
}

export default UserSection;
