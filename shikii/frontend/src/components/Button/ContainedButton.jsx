import React from 'react';
import { Box, Button } from '@mui/material';

function ContainedButton({ flexDirection = 'center',
  size, text, type = "", callbackFn = () => { return; } }) {
  return (
    <Box
      sx={ {
        m: '5px 10px',
        display: 'flex',
        justifyContent: { flexDirection },
        alignItems: 'center',
        height: '80px',
        zIndex: 1
      } }>
      <Button
        type={ type }
        variant='contained' size={ size }
        sx={ {
          p: '10px 25px',
          backgroundColor: '#295252',
          color: 'white',
          ':hover': { backgroundColor: '#1F3D3D' },
        } }
        onClick={ callbackFn }
      >
        { text }
      </Button>
    </Box>
  );
}

export default ContainedButton;