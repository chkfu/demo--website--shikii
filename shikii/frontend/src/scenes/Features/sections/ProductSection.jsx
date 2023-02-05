// from package
import React, { useContext } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import { ResponsiveContext } from '../../../App';
import ProductCardModel from '../../../components/Cards/ProductCardModel';

function ProductSection() {
    const screenWidth = useContext(ResponsiveContext);
    // database fetching
    const { data, error, isLoading, isFetching, isError } = useQuery('FetchNewItem', () => {
        return axios.get('http://localhost:3002/api/v1/products/get-new-items');
    });
    if (isLoading, isFetching) {
        return <CircularProgress color="inherit" />;
    }
    if (isError) {
        console.log(error);
    }

    // rendering

    return (
        <>
            <Typography
                className='feature--product--title'
                sx={ {
                    mt: '40px',
                    p: '20px',
                    fontSize: '30px',
                    textAlign: 'center',
                } }>Latest Products</Typography>

            <Box
                className='features--products--container'
                sx={ {
                    display: 'grid',
                    justifyItems: 'center',
                    gridTemplateColumns: screenWidth > 900 ? '1fr 1fr 1fr' : '1fr 1fr',
                    p: '20px 0',
                } }>
                {
                    data.data.data.products.map(product => {
                        return (
                            <div key={ product._id }>
                                <ProductCardModel
                                    id={ product._id }
                                    brand={ product.brand }
                                    name={ product.name }
                                    price={ product.price }
                                    coverImage={ product.coverImage }
                                    keywords={ product.keywords }
                                    averageRating={ product.averageRating }
                                    numOfRating={ product.numOfRating }
                                    callbackFn={ () => console.log('add to cart') } />
                            </div>);
                    })
                }
            </Box >
        </>
    );
}

export default ProductSection;
