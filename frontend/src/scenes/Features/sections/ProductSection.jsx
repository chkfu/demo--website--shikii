// from package
import React, { useContext } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import { ResponsiveContext } from '../../../App';
import ProductCardModel from '../../../components/Cards/ProductCardModel';
import ErrorPage from '../../ErrorPage';

function ProductSection() {
    const screenWidth = useContext(ResponsiveContext);
    // database fetching
    const { data, error, isLoading, isFetching, isError } = useQuery('FetchNewItem', () => {
        return axios.get('http://127.0.0.1:3002/api/v1/products/get-new-items');
    });
    if (isLoading, isFetching) {
        return <CircularProgress color="inherit" />;
    }
    if (isError) {
        return <ErrorPage />;
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
                    overflow: 'hidden',
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
                                    callback={
                                        async () => {
                                            await axios.patch(
                                                'http://127.0.0.1:3002/api/v1/users/wishlist',
                                                {
                                                    input: product._id,
                                                    quantity: 1
                                                },
                                                { withCredentials: true, credentials: 'include' });
                                        } } />
                            </div>);
                    })
                }
            </Box >
        </>
    );
}

export default ProductSection;
