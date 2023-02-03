// from package
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer, IconButton, ListItem, Typography } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
// from files
import '../css/navbar.css';
import iconStyle from './ReusableItems/iconStyle';
import IconContainer from './ReusableItems/IconContainer';
import FunctionIcons from './ReusableItems/FunctionIcons';
import FunctionTexts from './ReusableItems/FunctionTexts';
import ContainedButton from '../../Button/ContainedButton';
import CartProductCardModel from '../../Cards/CartProductCardModel';


// Responsive Design

const ExpandedCart = ({ props }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      {/* Cart Trigger */}
      <Box onClick={() => { setDrawerOpen(true); }}>
        <IconContainer>
          <FunctionIcons>
            <AddShoppingCartOutlinedIcon sx={iconStyle} />
          </FunctionIcons>
          <FunctionTexts>Cart</FunctionTexts>
        </IconContainer>
      </Box>

      {/* Cart Drawer */}
      <Drawer anchor='right' open={drawerOpen} onClose={async () => setDrawerOpen(false)}>
        <Box sx={{ width: '500px' }}>

          {/* close button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end'
            }}
          >
            <IconButton
              onClick={async () => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* title */}
          <Box>
            <Typography
              sx={{
                p: '10px',
                fontSize: '24px',
                color: '#49453F'
              }}>
              Shopping Cart
            </Typography>
          </Box>

          {/* main container */}
          <Box
            sx={{ height: '530px', p: '20px', overflow: 'scroll' }}>
            <CartProductCardModel />
            <CartProductCardModel />
            <CartProductCardModel />
            <CartProductCardModel />
            <CartProductCardModel />
            <CartProductCardModel />
          </Box>

          {/* price */}
          <Box
            sx={{
              mt: '30px',
              p: '30px',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              height: '50px'
            }}>
            <Typography
              sx={{ p: '20px', fontSize: '22px' }}>Price: £0.00</Typography>
          </Box>

          {/* proceed button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80px'
            }}
            onClick={() => setDrawerOpen(false)} >
            <Link to='/cart' style={{ textDecoration: 'none' }}>
              <ContainedButton text='Proceed' />
            </Link>
          </Box>

        </Box>
      </Drawer >
    </>
  );
};

const ShrinkedCart = () => {
  return (
    <ListItem>Cart</ListItem>
  );
};


// Rendering

function CartComponent() {
  return (
    <ExpandedCart />
  );
}

export default CartComponent;