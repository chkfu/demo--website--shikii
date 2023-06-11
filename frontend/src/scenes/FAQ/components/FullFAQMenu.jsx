// from package
import React from 'react';
import { List } from '@mui/material';
import { useSelector } from 'react-redux';


// style 
const NonSelectedStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
  minWidth: '450px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
  transition: 'width 1s'
};

const SelectedStyle = {
  width: '150px',
  height: '100%',
  transition: 'width 1s'
};


function FullFAQMenu({ children }) {
  // redux
  const categorySelected = useSelector(state => state.faq.categorySelected);
  // render
  return (
    <List sx={ categorySelected === 'none' ? NonSelectedStyle : SelectedStyle }>
      { children }
    </List >
  );
}

export default FullFAQMenu;
