// from package
import React from 'react';
import { Box } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// from file
import IconStyle from '../../ReusableItems/iconStyle';
import IconContainer from '../../ReusableItems/IconContainer';
import FunctionIcons from '../../ReusableItems/FunctionIcons';
import FunctionTexts from '../../ReusableItems/FunctionTexts';


// rendering
function CartTrigger({ setDrawerOpen }) {
  return (
    <Box>
      <IconContainer>

        <FunctionIcons setDrawerOpen={ setDrawerOpen }>
          <AddShoppingCartOutlinedIcon sx={ IconStyle } />
        </FunctionIcons>

        <FunctionTexts> Cart </FunctionTexts>

      </IconContainer>
    </Box>
  );
}

export default CartTrigger;
