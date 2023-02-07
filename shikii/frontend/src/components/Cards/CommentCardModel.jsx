import React from 'react';
import { Box, Typography, Rating } from '@mui/material';


// components

const CommentCardTop = (data) => {
  return (
    <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' } }>
      <Typography sx={ { fontSize: '18px', color: '#666666' } }>UserName</Typography>
      <Typography sx={ { fontSize: '16px', color: '#999999' } }>03/02/2023</Typography>
    </Box>
  );
};

const CommentCardMiddle = ({ data }) => {
  return (
    <Box sx={ { display: 'flex', alignItems: 'center', mt: '5px' } }>
      <Rating value={ 0 } readOnly />
      <Typography sx={ { ml: '10px', fontSize: '16px', color: '#999999' } }>0</Typography>
    </Box>
  );
};

const CommentCardBottom = ({ data }) => {
  return (
    <Box sx={ { mt: '10px' } }>
      <Typography sx={ { fontSize: '16px', textAlign: 'justify', color: '#333333' } }>
        { data.data.data.product.description }
      </Typography>
    </Box>
  );
};


// rendering

function CommentCardModel({ data }) {
  return (
    <Box sx={ { minHeight: '200px', m: '10px 0', p: '20px', backgroundColor: '#ecece2', boxShadow: '1' } }>
      <CommentCardTop data={ data } />
      <CommentCardMiddle data={ data } />
      <CommentCardBottom data={ data } />
    </Box>
  );
}

export default CommentCardModel;
