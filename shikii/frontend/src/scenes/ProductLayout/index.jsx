import React, { useContext } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
// from files
import { ResponsiveContext } from '../../App';
import AbstractBox from './AbstractBox';
import InfoBox from './InfoBox';
import CommentBox from './CommentBox';
import ErrorPage from '../ErrorPage';


function ProductLayout() {

  // data fetching
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery('fetch--single--product', async () => {
    return await axios.get(`http://127.0.0.1:3002/api/v1/products/${id}`);
  });
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // rendering
  return (
    <>
      <Box sx={ { p: screenWidth <= 1024 ? '20px 40px' : '20px 18vw' } }>
        <AbstractBox id={ id } data={ data } screenWidth={ screenWidth } />
        <InfoBox id={ id } data={ data } screenWidth={ screenWidth } />
        <CommentBox id={ id } data={ data } screenWidth={ screenWidth } />
      </Box>
    </>
  );
}

export default ProductLayout;
