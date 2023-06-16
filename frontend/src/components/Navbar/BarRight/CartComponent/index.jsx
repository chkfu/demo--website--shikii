// from package
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import './../../css/navbar.css';
import CartProductCardModel from '../../../Cards/CartProductCardModel';
import CartTrigger from './components/CartTrigger';
import CartDrawerContainer from './components/drawer/CartDrawerContainer';
import CloseBtnBox from './components/drawer/CloseBtnBox';
import TitleSection from './components/drawer/TitleSection';
import DisplaySection from './components/drawer/DisplaySection';
import PriceSection from './components/drawer/PriceSection';
import ButtonSection from './components/drawer/ButtonSection';

// Rendering
function CartComponent() {

  // get wishlist
  // identify users by specific tokens

  const { data, isLoading, isError, refetch } = useQuery('fetching--wishlist--', async () => {
    return await axios.get(
      'http://127.0.0.1:3002/api/v1/users/wishlist',
      { withCredentials: true, credentials: "include" });
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

  // render
  return (
    <>
      <CartTrigger refetch={ refetch } />

      <CartDrawerContainer>
        <CloseBtnBox />
        <TitleSection />

        <DisplaySection className='display--section'>
          {
            data.data.data.wishlist.length > 0 ? null : <p> No item can be found </p>
          }
          {
            data.data.data.wishlist[0]?.wishlist.map((item) => {
              return (
                <div key={ item.product._id }>
                  <CartProductCardModel
                    id={ item.product._id }
                    brand={ item.product.brand }
                    name={ item.product.name }
                    price={ item.product.price }
                    quantity={ item.count }
                    image={ item.product.coverImage }
                    count={ item.count }
                    refetch={ refetch } />
                </div>
              );
            })
          }

        </DisplaySection>

        <PriceSection finalTotal={ Number(data.data.data.wishlist[0]?.finalTotal) || Number(0).toFixed(2) } />
        <ButtonSection />
      </CartDrawerContainer >
    </>
  );
}

export default CartComponent;