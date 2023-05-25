// from package
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import SubSectionContainer from '../reusable/SubSectionContainer';
import CommentCardModel from '../../../components/Cards/CommentCardModel';


function CommentBox({ data }) {
  return (
    <SubSectionContainer title='Comments'>

      <Box sx={ { p: '0 45px' } }>
        <Typography sx={ { color: '#666666', fontSize: '16px', textAlign: 'left' } }>3 results are found.</Typography>
        <Typography sx={ { color: 'red', fontSize: '12px', textAlign: 'left' } }>
          Commenting function is currently not available.
          <br />
          For your information, please note that hard codes are displaying.
        </Typography>
      </Box>

      <Box sx={ { p: '10px 40px' } }>
        <CommentCardModel data={ data } />
        <CommentCardModel data={ data } />
        <CommentCardModel data={ data } />
      </Box>

    </SubSectionContainer >
  );
}

export default CommentBox;
