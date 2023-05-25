// from package
import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// from file
import IconStyle from '../../../BarRight/ReusableItems/iconStyle';


// rendering

function DrawerTrigger({ setMenuOpen }) {
  return (
    <IconButton
      sx={ IconStyle }
      onClick={ () => setMenuOpen(true) }>
      <MenuIcon />
    </IconButton>
  );
}

export default DrawerTrigger;
