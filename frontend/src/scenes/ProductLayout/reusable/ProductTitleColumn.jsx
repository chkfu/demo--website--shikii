import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductTitleColumn({ data, scrollToReview }) {
  return (
    <Box className='product--title--col--container'
      sx={ { p: '20px 40px' } }>

      {/* title column */ }

      <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
        <Typography sx={ { fontSize: '24px' } }>
          { data.data.data.product.name }
        </Typography>

        <Link
          to='/explore' style={ {
            color: '#228be6', textDecoration: 'none', fontSize: '18px',
            ':hover': { color: '#1971c2', textDecoration: 'underline' }
          } } >
          Back to Explore
        </Link>
      </Box>

      {/* rating Column */ }

      <Box sx={ { display: 'flex', alignItems: 'center', mt: '10px' } }>
        <Rating value={ data.data.data.product.averageRating } readOnly />
        <Typography sx={ { ml: '10px', color: '#666666', fontSize: '18px' } }>
          { data.data.data.product.averageRating.toFixed(1) }
        </Typography>
        <Typography sx={ { ml: '10px', color: '#666666', fontSize: '18px' } }>
          (
          { data.data.data.product.numOfRating }
          { data.data.data.product.numOfRating < 2 ? ' review' : ' reviews' }
          )
        </Typography>
      </Box>

      {/* trigger */ }
      <Typography
        onClick={ scrollToReview }
        sx={ {
          mt: '5px', textAlign: 'left', color: '#228be6', textDecoration: 'none', fontSize: '16px',
          ':hover': { color: '#1971c2', textDecoration: 'underline', cursor: 'pointer' }
        } }>Write your comment</Typography>

    </Box>
  );
}

export default ProductTitleColumn;
