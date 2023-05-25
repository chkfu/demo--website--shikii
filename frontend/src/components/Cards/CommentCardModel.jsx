// from package
import React from 'react';
import { Box, Typography, Rating } from '@mui/material';


// styles

const ContainerStyle = {
  minHeight: '200px',
  m: '10px 0',
  p: '40px 60px',
  backgroundColor: '#ecece2',
  boxShadow: '1'
};

const CommentCardTopStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
};

const CommentCardMiddleStyle = {
  display: 'flex',
  alignItems: 'center',
  mt: '5px'
};

const CommentCardBottomStyle = {
  mt: '10px'
};


const CommentUserNameStyle = {
  fontSize: '18px',
  color: '#666666'
};

const CommnetDateStyle = {
  fontSize: '16px',
  color: '#999999'
};

const CommentRateTextStyle = {
  ml: '10px',
  fontSize: '16px',
  color: '#999999'
};

const CommentDescriptionStyle = {
  fontSize: '16px',
  textAlign: 'justify',
  color: '#333333'
};




// components

const CommentCardTop = (data) => {
  return (
    <Box sx={ CommentCardTopStyle }>
      <Typography sx={ CommentUserNameStyle }>
        UserName
      </Typography>
      <Typography sx={ CommnetDateStyle }>
        03/02/2023
      </Typography>
    </Box>
  );
};

const CommentCardMiddle = ({ data }) => {
  return (
    <Box sx={ CommentCardMiddleStyle }>
      <Rating value={ 0 } readOnly />
      <Typography sx={ CommentRateTextStyle }>
        0
      </Typography>
    </Box>
  );
};

const CommentCardBottom = ({ data }) => {
  return (
    <Box sx={ CommentCardBottomStyle }>
      <Typography sx={ CommentDescriptionStyle }>
        { data.data.data.product.description }
      </Typography>
    </Box>
  );
};


// rendering

function CommentCardModel({ data }) {
  return (
    <Box sx={ ContainerStyle }>
      <CommentCardTop data={ data } />
      <CommentCardMiddle data={ data } />
      <CommentCardBottom data={ data } />
    </Box>
  );
}

export default CommentCardModel;
