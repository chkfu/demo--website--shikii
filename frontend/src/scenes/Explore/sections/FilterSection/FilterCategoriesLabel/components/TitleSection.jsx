// from package
import React from 'react';
import { Box, Typography } from '@mui/material';


// styles
const SectionBoxStyle = {
  display: 'flex'
};
const TitleTextStyle = {
  p: '0 5px',
  fontSize: '16px',
  textAlign: 'left'
};


// rendering
function TitleSection() {
  return (
    <Box sx={ SectionBoxStyle }>
      <Typography sx={ TitleTextStyle }>
        Series:
      </Typography>
    </Box >
  );
}

export default TitleSection;
