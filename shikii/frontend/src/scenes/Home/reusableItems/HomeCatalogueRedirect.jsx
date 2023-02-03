import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function HomeCatalogueRedirect({ linkTo }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', p: '0 18vw' }}>
      <Link
        className='catalogue--redirect'
        to={linkTo}
        style={{
          fontSize: '16px', color: '#1c7ed6', textUnderlineOffset: '5px'
        }}>
        See more
      </Link>
    </Box >
  );
}

export default HomeCatalogueRedirect;