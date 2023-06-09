// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
// from file
import { ResponsiveContext } from './../../../../../App';
import ProductCardModel from '../../../../../components/Cards/ProductCardModel';


// rendering
function NonFilteringDisplay({ data }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // styles
  const ContainerStyle = {
    justifyItems: 'center',
    display: 'grid',
    gridTemplateColumns: screenWidth > 1100 ? '1fr 1fr 1fr' : '1fr 1fr'
  };

  // render
  return (
    <Box sx={ ContainerStyle }>
      {
        data.data.data.products.map((product) => {
          return (
            <div key={ product._id }>
              <ProductCardModel
                key={ product._id }
                id={ product._id }
                brand={ product.brand }
                name={ product.name }
                price={ product.price }
                coverImage={ product.coverImage }
                keywords={ product.keywords }
                averageRating={ product.averageRating }
                numOfRating={ product.numOfRating }
                callback={
                  async () => {
                    await axios.patch(
                      'http://127.0.0.1:3002/api/v1/users/wishlist',
                      {
                        input: product._id,
                        quantity: 1
                      },
                      { withCredentials: true, credentials: 'include' });
                  }

                } />
            </div>
          );
        })
      }
    </Box >
  );
}

export default NonFilteringDisplay;

