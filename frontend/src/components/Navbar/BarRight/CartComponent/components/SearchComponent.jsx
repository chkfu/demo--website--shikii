// from package
import React from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// from file
import './../../../css/navbar.css';
import iconStyle from '../../ReusableItems/iconStyle';
import IconContainer from '../../ReusableItems/IconContainer';
import FunctionIcons from '../../ReusableItems/FunctionIcons';
import FunctionTexts from '../../ReusableItems/FunctionTexts';


// styles
const LinkStyle = {
  color: '#908B84',
  textDecoration: 'none'
};

// rendering
function SearchComponent() {
  return (
    <Link
      to='/FAQ'
      style={ LinkStyle }>

      <IconContainer>
        <FunctionIcons>
          <SearchOutlinedIcon sx={ iconStyle } />
        </FunctionIcons>
        <FunctionTexts>
          FAQ
        </FunctionTexts>
      </IconContainer>

    </Link>
  );
}

export default SearchComponent;