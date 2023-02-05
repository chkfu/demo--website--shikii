import React from 'react';
import { ListItem } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

function BarLeftItemContainer({ children }) {
  return (
    <ListItem
      className='navbar--itemContainer'
      sx={ {
        width: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px'
      } }>
      { children }
    </ListItem>
  );
}

export default BarLeftItemContainer;