import React from 'react';
import { Button } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function index({ scrollHandler }) {
  return (
    <Button
      onClick={ scrollHandler }
      sx={ {
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
      } }>
      <KeyboardArrowUpOutlinedIcon />
      Top
    </Button>
  );
}

export default index;
