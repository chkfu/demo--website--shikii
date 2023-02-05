import React, { useContext } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
// from files
import { ResponsiveContext } from '../../App';
import ContainedButton from '../../components/Button/ContainedButton';
import AbstractBox from './AbstractBox';
import InfoBox from './InfoBox';
import CommentBox from './CommentBox';
import SubSectionContainer from './reusable/SubSectionContainers';


function ProductLayout() {

  // data fetching

  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery('fetch--single--product', async () => {
    return await axios.get(`http://127.0.0.1:3002/api/v1/products/${id}`);
  });
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }
  if (isError) {
    console.log(error);
  }

  // responsive design

  const screenWidth = useContext(ResponsiveContext);

  // rendering

  return (
    <>


      <AbstractBox id={ id } data={ data } screenWidth={ screenWidth } />
      <InfoBox id={ id } data={ data } screenWidth={ screenWidth } />
      <CommentBox id={ id } data={ data } screenWidth={ screenWidth } />
    </>
  );
}

export default ProductLayout;
