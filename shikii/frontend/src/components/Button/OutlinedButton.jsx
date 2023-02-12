import React from 'react';
import { Box, Button } from '@mui/material';

function OutlinedButton({ flexDirection = 'center', size = 'large', text }) {
  return (
    <Box sx={ { display: 'flex', justifyContent: { flexDirection } } }>
      <Button
        variant='outlined'
        size={ size }
        sx={ {
          m: '70px 0 0 0',
          p: '20px 40px',
          border: '3px solid white',
          backgroundColor: 'transparent',
          color: 'white',
          filter: 'brightness(0.8)',
          opacity: '0.8',
          ':hover': {
            border: '3px solid white',
            backgroundColor: 'white',
            filter: 'brightness(0.85)',
            color: '#343a40'
          }
        } }
      >
        { text }
      </Button>
    </Box>
  );
}

export default OutlinedButton;