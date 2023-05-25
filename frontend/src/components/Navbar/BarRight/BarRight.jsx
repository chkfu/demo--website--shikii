// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import '../css/navbar.css';
import { ResponsiveContext } from '../../../App';
import CartComponent from './CartComponent';
import LoginComponent from './CartComponent/components/LoginComponent';
import SearchComponent from './CartComponent/components/SearchComponent';
import UserComponent from './CartComponent/components/UserComponent';



// styles 
const ContainerStyle = {
  display: 'flex', mr: '20px'
};


// rendering
function BarRight() {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // get login status - from local storage
  const loginStatus = localStorage.getItem('loginStatus');

  // render
  return (
    screenWidth >= 768 &&

    <Box sx={ ContainerStyle }>
      { loginStatus ? <UserComponent /> : <LoginComponent /> }
      <SearchComponent />
      <CartComponent />
    </Box >
  );
};

export default BarRight;