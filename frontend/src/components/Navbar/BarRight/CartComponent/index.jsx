// from package
import React, { useState } from 'react';
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

  // state management
  const [drawerOpen, setDrawerOpen] = useState(false);

  // data fetching
  // get userId
  const userId = localStorage.getItem('userId');
  // get wishlist
  const { data, isLoading, isError, refetch } = useQuery('fetching--wishlist--', async () => {
    return await axios.get('http://127.0.0.1:3002/api/v1/users/wishlist', { withCredentials: true, credentials: "include" });
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
      <CartTrigger setDrawerOpen={ setDrawerOpen } />

      <CartDrawerContainer drawerOpen={ drawerOpen } setDrawerOpen={ setDrawerOpen }>
        <CloseBtnBox setDrawerOpen={ setDrawerOpen } />
        <TitleSection />

        <DisplaySection >
          {
            data.data.data.wishlist.length > 0 ? null : <p>No item can be found</p>
          }
          {
            data.data.data.wishlist[0]?.wishlist.map((item) => {
              return <CartProductCardModel
                id={ item.product._id }
                brand={ item.product.brand }
                name={ item.product.name }
                price={ item.product.price }
                quantity={ item.count }
                image={ item.product.coverImage }
                count={ item.count }
                refetch={ refetch } />;
            })
          }

        </DisplaySection>

        <PriceSection finalTotal={ data.data.data.wishlist[0]?.finalTotal || Number(0).toFixed(2) } />
        <ButtonSection setDrawerOpen={ false } />
      </CartDrawerContainer >
    </>
  );
}

export default CartComponent;