// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
import IconDetector from './IconDetector';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { setCategorySelection } from '../../../../redux/reducers/faqSlice';


// style
const NonSelectedContainerStyle = {
  border: '4px solid white',
  display: 'flex',
  flexWrap: 'wrap',
  margin: '5px',
  padding: '25px 20px',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px',
  width: '200px',
  height: '200px',
  cursor: 'pointer',
  transition: 'width 1.5s height 1.5s',
  ':active': {
    transform: 'scale(0.98)'
  }
};


const NarrowedContainerStyle = {
  overflowY: 'none',
  border: '4px solid white',
  display: 'flex',
  flexWrap: 'wrap',
  margin: '5px',
  padding: '20px 10px',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px',
  width: '100px',
  height: '120px',
  gap: '0px',
  cursor: 'pointer',
  opacity: '0.4',
  transition: 'width 1.5s height 1.5s',
  ':active': {
    transform: 'scale(0.98)'
  }
};

const SelectedContainerStyle = {
  border: '4px solid #45602F',
  display: 'flex',
  flexWrap: 'wrap',
  margin: '5px',
  padding: '20px 10px',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px',
  width: '100px',
  height: '120px',
  gap: '0px',
  cursor: 'pointer',
  opacity: '1',
  transition: 'width 1.5s height 1.5s',
  ':active': {
    transform: 'scale(0.98)'
  }
};

const NarrowedSelectedIconBox = {
  width: '120px',
  transition: 'width 1.5s height 1.5s'
};

const NonSelectedIconBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  transition: 'width 1.5s height 1.5s'
};

const NarrowedTextContainerStyle = {
  overflow: 'none',
  width: '100px',
  transition: 'width 1.5s'
};

const NonSelectedTextContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  width: '200px',
  transition: 'width 1.5s'
};

const NarrowedTextStyle = {
  overflow: 'none',
  fontSize: '10px',
  lineHeight: '10px',
};

const TextStyle = {
  fontSize: '18px',
  color: '#333333',
  lineHeight: '18px',
};


// rendering

function FullFAQItem({ title }) {
  // redux
  const dispatch = useDispatch();
  const categorySelected = useSelector(state => state.faq.categorySelected);

  // function
  const ClickHandler = () => {
    dispatch(setCategorySelection(title));
  };

  const ContainerSelector = () => {
    if (categorySelected === 'none')
      return NonSelectedContainerStyle;
    if (categorySelected === title)
      return SelectedContainerStyle;
    else
      return NarrowedContainerStyle;
  };

  // render
  return (
    <Box
      sx={ ContainerSelector }
      onClick={ ClickHandler }
    >

      {/* icon */ }
      <Box
        sx={ categorySelected === 'none' ? NonSelectedIconBox : NarrowedSelectedIconBox }
        title={ title } >
        <IconDetector title={ title } />
      </Box >

      {/* title */ }
      < Box sx={ categorySelected === 'none' ? NonSelectedTextContainerStyle : NarrowedTextContainerStyle } >
        <Typography sx={ categorySelected === 'none' ? TextStyle : NarrowedTextStyle }>
          { title }
        </Typography>
      </Box >

    </Box >
  );
}

export default FullFAQItem

