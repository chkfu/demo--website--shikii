import React from 'react';
import { Box } from '@mui/material';

function HomePairCardsContiner({ children }) {
  return (
    <Box
      className='display--container--outer'
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      {children}
    </Box>
  );
}

export default HomePairCardsContiner;