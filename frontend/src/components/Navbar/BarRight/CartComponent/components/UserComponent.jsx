// from package
import React from 'react';
import { Box } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// from file
import iconStyle from '../../ReusableItems/iconStyle';
import IconContainer from '../../ReusableItems/IconContainer';
import FunctionIcons from '../../ReusableItems/FunctionIcons';
import FunctionTexts from '../../ReusableItems/FunctionTexts';


function UserComponent() {

  // redirect hook
  const navigate = useNavigate();

  // get icon from local stroage
  const userIcon = localStorage.getItem('userIcon');

  // functions  
  const LogoutHandler = async () => {
    // terminate storage and cookies]
    localStorage.clear();
    await axios.get('http://127.0.0.1:3002/api/v1/users/logout', { credentials: 'include', withCredentials: true });
    // refresh + redirect
    navigate('/');
    window.location.reload();
  };



  // rendering
  return (
    <Box sx={ { display: 'flex' } }>

      {/* icon */ }

      <Box
        onClick={ () => { return navigate('/user-profile'); } }
        sx={ {
          width: '60px', height: '60px', m: '5px 10px', borderRadius: '100%', boxShadow: 2, transition: 'transform 1s',
          ':hover': { cursor: 'pointer', transform: 'scale(1.1)', transition: 'transform 1s' }
        } }>
        <img
          src={ `/images/users/${userIcon}` } alt="user icon"
          style={ { width: '100%', height: '100%' } } />
      </Box>


      {/* Logout */ }

      <div onClick={ LogoutHandler } >
        <IconContainer>
          <FunctionIcons>
            <LogoutOutlinedIcon sx={ iconStyle } />
          </FunctionIcons>
          <FunctionTexts>Logout</FunctionTexts>
        </IconContainer>
      </div>

    </Box >
  );
}

export default UserComponent;
