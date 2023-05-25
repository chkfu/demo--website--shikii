// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// from file
import { ResponsiveContext } from '../../App';




// rendering

function SceneContainer({ children }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);
  let border = screenWidth >= 600 ? '10vw' : '0px';

  // styles
  const ContainerStyle = {
    width: '100vw',
    minHeight: '800px',
    p: `40px ${border}`
  };

  // rendering
  return (
    <Box sx={ ContainerStyle } >
      { children }
    </ Box>
  );
}

export default SceneContainer;;;