import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

function SubSectionContainer({ title, children }) {
  return (
    <>
      <Typography
        sx={ {
          textAlign: 'left', mt: '40px', p: '0 40px',
          fontSize: '24px'
        } }>{ title }</Typography>

      <Divider sx={ { m: '10px' } } />

      <Box className='sub--section--container'>
        { children }
      </Box>
    </>
  );
}

export default SubSectionContainer;
