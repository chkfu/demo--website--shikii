import React from 'react';
import { Box } from '@mui/material';

function ProductImageColumn({ data }) {
  return (
    <Box sx={ { m: '20px' } }>
      <img
        src={ `/images/products/${data.data.data.product.coverImage}` }
        alt={ `cover image of ${data.data.data.product.name}` }
        style={ { width: '60%', maxWidth: '500px' } }
      />
    </Box>
  );
}

export default ProductImageColumn;
