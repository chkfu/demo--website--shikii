// from package
import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';


// rednering

function index({ scrollHandler }) {

  // declaration
  const emergeLine = 600;

  // scroll Y-axis tracking
  const [toTopDisplay, setToTopDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > emergeLine) setToTopDisplay(true);
      if (window.scrollY < emergeLine) setToTopDisplay(false);
    });
  }, []);

  // styles
  const ButtonStyle = {
    display: toTopDisplay ? 'static' : 'none',
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

  // rendering 

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
}

export default index;
