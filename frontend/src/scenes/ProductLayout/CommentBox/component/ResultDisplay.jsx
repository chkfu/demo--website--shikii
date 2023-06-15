// from package
import React from 'react';
import { Box } from '@mui/material';
// from file
import CommentCardModel from './../../../../components/Cards/CommentCardModel';


// style 

const ContainerStyle = {
  p: '10px 30px'
};


// rendering

function ResultDisplay({ data }) {
  return (
    <Box sx={ ContainerStyle }>
      { data.data.data.map(item => {
        return (
          <CommentCardModel
            key={ item._id }
            name={ `${item.user.firstName} ${item.user.lastName}` }
            date={ item.createdAt }
            rate={ item.rating.toFixed(1) }
            review={ item.review }
          />
        );
      }) }
    </Box>
  );
}

export default ResultDisplay;
