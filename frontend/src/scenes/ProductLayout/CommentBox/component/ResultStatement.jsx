// from package
import React from 'react';
import { Box, Typography } from '@mui/material';


// styles
const ContainerStyle = {
  p: '0 45px'
};

const ResultStatementStyle = {
  color: '#666666',
  fontSize: '16px',
  textAlign: 'left'
};

// rendering

function ResultStatement({ data }) {
  // function
  const resultDetector = (length) => {
    if (length === 0)
      return `No result is found.`;
    if (length === 1)
      return `1 result is found.`;
    return `${length} result is found.`;
  };
  // render
  return (
    <Box sx={ ContainerStyle }>
      <Typography sx={ ResultStatementStyle }>
        { resultDetector(data.data.data.length) }
      </Typography>
    </Box>
  );
}

export default ResultStatement;
