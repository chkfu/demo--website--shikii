// from package
import React, { useContext } from 'react';
import { Box, Divider, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import HomeContainer from '../ReusableItems/HomeContainer';
import HomeHeading from '../ReusableItems/HomeHeading';
import HomeSubheading from '../ReusableItems/HomeSubheading';
import HomePairCardsContiner from '../ReusableItems/HomePairCardsContiner';
import ProductCardModel from '../../../components/Cards/ProductCardModel';
import HomeCatalogueRedirect from '../ReusableItems/HomeCatalogueRedirect';
import { ResponsiveContext } from '../../../App';
import { fetchAllProducts } from '../../../theme/APILinks';

// rendering

function ExploreSection() {

  let displayValue;
  const screenWidth = useContext(ResponsiveContext);
  if (screenWidth > 1024) {
    displayValue = 4;
  }
  else if (screenWidth > 768) {
    displayValue = 3;
  }
  else {
    displayValue = 2;
  }

  // database fetching
  const { data, error, isLoading, isFetching, isError } = useQuery('ProductData', async () => {
    return axios.get(fetchAllProducts, {
      params: {
        sort: '-createdAt',
        page: 1,
        pageSize: displayValue
      }
    });
  });
  if (isLoading, isFetching) {
    return <CircularProgress color="inherit" />;
  }
  if (isError) {
    console.log(error);
  }

  return (
    <section>
      <HomeContainer>

        {/* Heading */}
        <Box>
          <HomeHeading title='Autumn Sale' />
          <HomeSubheading subtitle='Get your discount up to 30% off' />

          <HomeCatalogueRedirect linkTo='/explore' />
        </Box>

        {/* Container */}
        <Box
          className='display--container--outer'
          sx={{ display: 'flex', justifyContent: 'center', mt: '50px', width: 'auto', }}>

          {/* Display Area */}
          <Box
            className='display--container--inner--center'
            sx={{ display: 'flex', justifyContent: 'center', overflow: 'scroll' }}>
            <HomePairCardsContiner>
              {
                data.data.data.products.map((product, index) => (

                  index < displayValue ? (
                    <div key={product._id}>
                      <ProductCardModel
                        brand={product.brand}
                        name={product.name}
                        price={Number(product.price).toFixed(2)}
                        coverImage={product.coverImage}
                        keywords={product.keywords}
                        averageRating={product.averageRating}
                        numOfRating={product.numOfRating}
                      />
                    </div>) : null
                ))
              }
            </HomePairCardsContiner>
          </Box>


        </Box>
      </HomeContainer >
      <Divider style={{ width: '100%' }} />
    </section >
  );
}

export default ExploreSection;