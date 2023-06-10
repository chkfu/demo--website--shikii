// from package
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
// from file
import ProductCardModel from '../../../../../components/Cards/ProductCardModel';
import { ResponsiveContext } from './../../../../../App';



// rendering

function FilteringDisplay({ data }) {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // redux
  const search = useSelector(state => state.explore.search);

  // styles
  const ContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: screenWidth > 1100 ? '1fr 1fr 1fr' : '1fr 1fr',
  };


  // render
  return (
    <Box sx={ ContainerStyle }>

      {
        data.data.data.products.map((product) => {
          const refinedSearch = search.trim().toLowerCase();
          if (
            product.brand.trim().toLowerCase().includes(refinedSearch) ||
            product.name.trim().toLowerCase().includes(refinedSearch) ||
            product.series.trim().toLowerCase().includes(refinedSearch) ||
            product.keywords.includes(refinedSearch)
          ) {
            return (
              <ProductCardModel
                key={ product._id }
                id={ product._id }
                brand={ product.brand }
                name={ product.name }
                price={ parseInt(product.price, 10).toFixed(2) }
                coverImage={ product.coverImage }
                keywords={ product.keywords }
                averageRating={ parseInt(product.averageRating, 10) }
                numOfRating={ parseInt(product.numOfRating, 10) }
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
            );
          }
        }
        )
      }
    </Box >
  );
}

export default FilteringDisplay;
