import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ResponsiveContext } from '../../App';

function SceneContainer({ children }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);
  let border = screenWidth >= 600 ? '10vw' : '0px';

  // rendering
  return (
    <Box
      className='page--container'
      sx={{
        width: '100vw',
        minHeight: '800px',
        p: `40px ${border}`
      }} >
      {children}
    </ Box>
  );
}

export default SceneContainer;;;