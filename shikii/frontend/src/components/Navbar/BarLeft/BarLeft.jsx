import React, { useState, useContext } from 'react';
import { Box, List, ListItem, Drawer, IconButton, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// from files
import '../css/navbar.css';
import IconStyle from '../BarRight/ReusableItems/iconStyle';
import BarLeftItemContainer from './ReusableItems/BarLeftItemContainer';
import BarLeftItemLink from './ReusableItems/BarLeftItemLink';
import { ResponsiveContext } from '../../../App';



// Responsive Design

const ShrinkedContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>

      {/* Drawer Trigger */}
      <IconButton
        sx={IconStyle}
        onClick={() => setMenuOpen(true)}>
        <MenuIcon />
      </IconButton>

      {/* Menu Drawer */}
      <Drawer anchor='left' open={menuOpen} onClick={() => setMenuOpen(false)}>
        {/* close button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <IconButton
            sx={{ p: '20px' }}
            onClick={() => setMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Drawer Content */}
        <Box sx={{ width: '400px', p: '20px 60px' }}>
          {/* Links Section */}
          <Typography variant='h6' sx={{ p: '5px' }}>Links</Typography>
          <List sx={{ p: '5px' }}>
            <ListItem>
              <BarLeftItemLink to='/' title='Home' />
            </ListItem>
            <ListItem>
              <BarLeftItemLink to='/features' title='Features' />
            </ListItem>
            <ListItem>
              <BarLeftItemLink to='/explore' title='Explore' />
            </ListItem>
            <ListItem>
              <BarLeftItemLink to='/news' title='News' />
            </ListItem>
          </List>

          <Divider sx={{ m: '20px' }} />

          {/* User Section */}
          <Typography variant='h6' sx={{ p: '5px' }}>User</Typography>
          <List sx={{ p: '5px' }}>

            <ListItem>
              <BarLeftItemLink to='/login' title='Login / Sign up' />
            </ListItem>
            <ListItem>
              <BarLeftItemLink to='/search' title='Search' />
            </ListItem>
            <ListItem>
              <BarLeftItemLink to='/cart' title='Cart' />
            </ListItem>

          </List>
        </Box>
      </Drawer></>

  );
};


const ExpandedContainer = () => {
  return (
    <List sx={{ display: 'flex' }}>
      <ListItem>
        <Link
          to='/'
          className='logo-text'
          style={{ color: '#908B84', fontSize: '28px', textDecoration: 'none' }}>
          Shikii</Link>
      </ListItem>
      <BarLeftItemContainer>
        <BarLeftItemLink to='/features' title='Features' />
      </BarLeftItemContainer>
      <BarLeftItemContainer>
        <BarLeftItemLink to='/explore' title='Explore' />
      </BarLeftItemContainer>
      <BarLeftItemContainer>
        <BarLeftItemLink to='/news' title='News' />
      </BarLeftItemContainer>
    </List>
  );
};

// rendering

function BarLeft() {
  const screenWidth = useContext(ResponsiveContext);
  return (
    screenWidth >= 768 ?
      (<ExpandedContainer />) : (<ShrinkedContainer />)
  );
}

export default BarLeft;;