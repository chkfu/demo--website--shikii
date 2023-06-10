// from package
import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
// from file
import IconStyle from '../../../BarRight/ReusableItems/iconStyle';
import { switchMenuOpen } from '../../../../../../redux/reducers/navbarSlice';


// rendering

function DrawerTrigger() {
  // redux
  const dispatch = useDispatch();
  const menuOpen = useSelector(state => state.navbar.menuOpen);
  // render
  return (
    <IconButton
      sx={ IconStyle }
      onClick={ () => { dispatch(switchMenuOpen(true)); } }>
      <MenuIcon />
    </IconButton>
  );
}

export default DrawerTrigger;
