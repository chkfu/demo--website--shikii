import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
// from file
import SubSectionContainer from '../reusable/SubSectionContainer';
import ProductTitleColumn from '../reusable/ProductTitleColumn';
import ProductImageColumn from '../reusable/ProductImageColumn';
import ProductPurchaseColumn from '../reusable/ProductPurchaseColumn';


function AbstractBox({ data }) {
  return (
    <SubSectionContainer title="">
      <ProductTitleColumn data={ data } />
      <ProductImageColumn data={ data } />
      <ProductPurchaseColumn data={ data } />
    </SubSectionContainer>
  );
}

export default AbstractBox;
