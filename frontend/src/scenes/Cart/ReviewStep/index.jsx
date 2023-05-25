import React from 'react';
import CartProductCardModel from '../../../components/Cards/CartProductCardModel';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import ReviewStepContainer from './components/ReviewStepContainer';
import InnerContainer from './components/InnerContainer';


// rendering
function ReviewStep() {

    const { data, isLoading, isError, refetch } = useQuery('fetching--wishlist--item', async () => {
        return await axios.get('http://127.0.0.1:3002/api/v1/users/wishlist',
            {
                withCredentials: true,
                credentials: "include",
                refetchOnWindowFocus: false,
                enabled: false
            });
    });
    if (isLoading) {
        return <></>;
    }
    if (isError) {
        return <></>;
    }
    if (!data) {
        return <></>;
    }

    return (
        <ReviewStepContainer>

            <InnerContainer>
                {
                    data.data.data.wishlist.length > 0 ? null : <p>No item can be found</p>
                }
                {
                    data.data.data.wishlist[0]?.wishlist.map((item) => {
                        return (
                            <CartProductCardModel
                                key={ item.product._id }
                                id={ item.product._id }
                                brand={ item.product.brand }
                                name={ item.product.name }
                                price={ item.product.price }
                                image={ item.product.coverImage }
                                quantity={ item.count }
                                refetch={ refetch } />
                        );
                    })
                }
            </InnerContainer>
        </ReviewStepContainer >
    );
}

export default ReviewStep;
