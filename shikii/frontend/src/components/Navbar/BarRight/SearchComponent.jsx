// from package
import React from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// from file
import '../css/navbar.css';
import iconStyle from './ReusableItems/iconStyle';
import IconContainer from './ReusableItems/IconContainer';
import FunctionIcons from './ReusableItems/FunctionIcons';
import FunctionTexts from './ReusableItems/FunctionTexts';

function SearchComponent() {
  return (
    <Link
      to='/search'
      style={{ color: '#908B84', textDecoration: 'none' }}>
      <IconContainer>
        <FunctionIcons>
          <SearchOutlinedIcon sx={iconStyle} />
        </FunctionIcons>
        <FunctionTexts>Search</FunctionTexts>
      </IconContainer>
    </Link>
  );
}

export default SearchComponent;