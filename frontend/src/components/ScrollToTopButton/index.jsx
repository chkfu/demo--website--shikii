// from package
import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { setBtnDisplay } from '../../../redux/reducers/scrollToTopSlice';


// rednering

function index({ scrollHandler }) {

  // redux
  const btnDisplay = useSelector(state => state.scrollToTop.btnDisplay);
  const dispatch = useDispatch();

  // declaration
  const emergeLine = 200;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > emergeLine) dispatch(setBtnDisplay(true));
      if (window.scrollY < emergeLine) dispatch(setBtnDisplay(false));
    });
  }, []);

  // styles
  const ButtonStyle = {
    display: btnDisplay ? 'static' : 'none',
    position: 'fixed',
    top: '85%',
    right: '5%',
    textWrap: 'wrap',
    textTransform: 'uppercase',
    fontSize: '14px',
    backgroundColor: '#666666',
    color: 'white',
    width: '90px',
    height: '60px',
    opacity: '0.3',
    ':hover': {
      backgroundColor: '#666666',
      color: 'white',
      opacity: '0.4'
    },
    ':active': {
      transform: 'scale(0.95)'
    }
  };

  // render
  return (
    <Button
      sx={ ButtonStyle }
      onClick={ scrollHandler }>

      <KeyboardArrowUpOutlinedIcon />
      <Typography>
        TOP
      </Typography>

    </Button>
  );
};

export default index;
