// from package
import React from 'react';
import { Box, Typography, Rating } from '@mui/material';


// styles

const ContainerStyle = {
  m: '10px 0',
  p: '20px 40px',
  backgroundColor: '#ecece2',
  boxShadow: '1',
  boxShadow: 2
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

const CommentCardTop = ({ name, date }) => {
  return (
    <Box sx={ CommentCardTopStyle }>
      <Typography sx={ CommentUserNameStyle }>
        { name }
      </Typography>
      <Typography sx={ CommnetDateStyle }>
        { date.toString().slice(0, 10).split('-').reverse().join('/') }
      </Typography>
    </Box>
  );
};

const CommentCardMiddle = ({ rate }) => {
  return (
    <Box sx={ CommentCardMiddleStyle }>
      <Rating value={ Number(rate) } readOnly />
      <Typography sx={ CommentRateTextStyle }>
        { rate }
      </Typography>
    </Box>
  );
};

const CommentCardBottom = ({ review }) => {
  return (
    <Box sx={ CommentCardBottomStyle }>
      <Typography sx={ CommentDescriptionStyle }>
        { review }
      </Typography>
    </Box>
  );
};


// rendering

function CommentCardModel({ name, date, rate, review }) {
  return (
    <Box sx={ ContainerStyle }>
      <CommentCardTop name={ name } date={ date } />
      <CommentCardMiddle rate={ rate } />
      <CommentCardBottom review={ review } />
    </Box>
  );
}

export default CommentCardModel;
