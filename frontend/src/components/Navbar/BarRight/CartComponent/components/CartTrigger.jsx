// from package
import React from 'react';
import { Box, IconButton } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useDispatch } from 'react-redux';
// from file
import IconStyle from '../../ReusableItems/iconStyle';
import IconContainer from '../../ReusableItems/IconContainer';
import FunctionTexts from '../../ReusableItems/FunctionTexts';
import { switchCartOpen } from './../../../../../../redux/reducers/navbarSlice';


// rendering
function CartTrigger({ refetch }) {

  // redux
  const dispatch = useDispatch();

  // function
  const ClickHandler = () => {
    dispatch(switchCartOpen(true));
    refetch();
  };

  // render
  return (
    <Box>
      <IconContainer>

        <IconButton onClick={ ClickHandler }>
          <AddShoppingCartOutlinedIcon sx={ IconStyle } />
        </IconButton>

        <FunctionTexts> Cart </FunctionTexts>

      </IconContainer>
    </Box >
  );
}

export default CartTrigger;
