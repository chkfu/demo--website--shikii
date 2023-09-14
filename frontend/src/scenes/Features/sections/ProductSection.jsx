// from package
import React, { useContext } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import { ResponsiveContext } from '../../../App';
import ProductCardModel from '../../../components/Cards/ProductCardModel';
import ErrorPage from '../../ErrorPage';
import { BACKEND_ROUTE } from '../../../theme/api-links';


// styles

const TitleStyle = {
    mt: '40px',
    p: '20px',
    fontSize: '30px',
    textAlign: 'center',
    overflow: 'hidden',
};

const ExtendedContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
    p: '20px 0',
};

const ShrinkedContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 1fr',
    p: '20px 0',
};


// rendering

function ProductSection() {

    // responsive design
    const screenWidth = useContext(ResponsiveContext);

    // database fetching
    const { data, isLoading, isFetching, isError } = useQuery('FetchNewItem', () => {
        return axios.get(`${BACKEND_ROUTE}/api/v1/products/get-new-items`);
    });
    if (isLoading, isFetching) {
        return <CircularProgress color="inherit" />;
    }
    if (isError) {
        return <ErrorPage />;
    }

    // renders
    return (
        <>
            <Typography sx={ TitleStyle }>
                Latest Products
            </Typography>

            <Box
                className='features--products--container'
                sx={ screenWidth > 900 ? ExtendedContainerStyle : ShrinkedContainerStyle }>
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
                                                `${BACKEND_ROUTE}/api/v1/users/wishlist`,
                                                {
                                                    input: product._id,
                                                    quantity: 1
                                                },
                                                {
                                                    withCredentials: true,
                                                    credentials: 'include'
                                                });
                                        } } />
                            </div>);
                    })
                }
            </Box>
        </>
    );
}

export default ProductSection;
