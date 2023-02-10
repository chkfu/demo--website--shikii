import React from 'react';
// from file
import SubSectionContainer from '../reusable/SubSectionContainer';
import ProductTitleColumn from '../reusable/ProductTitleColumn';
import ProductImageColumn from '../reusable/ProductImageColumn';
import ProductPurchaseColumn from '../reusable/ProductPurchaseColumn';


function AbstractBox({ data, scrollToReview }) {
  return (
    <SubSectionContainer title="">
      <ProductTitleColumn data={ data } scrollToReview={ scrollToReview } />
      <ProductImageColumn data={ data } />
      <ProductPurchaseColumn data={ data } />
    </SubSectionContainer>
  );
}

export default AbstractBox;
