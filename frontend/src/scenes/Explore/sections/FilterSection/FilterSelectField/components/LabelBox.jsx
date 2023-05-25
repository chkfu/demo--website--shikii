// fronm package
import React from 'react';
import { Box } from '@mui/material';


// styles

const LabelBoxStyle = {
  textAlign: 'left'
};

const LabelTextStyle = {
  fontSize: '16px'
};


// rendering

function LabelBox() {
  return (
    <Box sx={ LabelBoxStyle }>
      <label style={ LabelTextStyle }>
        Sorted by:
      </label>
    </Box>
  );
}

export default LabelBox;
