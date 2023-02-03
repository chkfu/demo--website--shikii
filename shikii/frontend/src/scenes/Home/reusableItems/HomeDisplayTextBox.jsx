import React from 'react';
import { Box, Typography } from '@mui/material';
import OutlinedButton from '../../../components/Button/OutlinedButton';

function HomeDisplayTextBox({ title }) {
  return (
    <div>
      <Typography sx={{
        mt: '150px', fontSize: '32px', color: 'white', filter: 'brightness(1.5)'
      }}>{title}</Typography>
      <Box sx={{ display: 'flex', fontSize: '28px', justifyContent: 'center' }}>
        <OutlinedButton flexDirection='center' text='Visit' size='medium' />
      </Box>

    </div >
  );
}

export default HomeDisplayTextBox;