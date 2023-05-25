// from package
import React from 'react';
import { Divider } from '@mui/material';
// from file
import SceneContainer from '../../components/Container/SceneContainer';
import AdvertisementSection from './AdvertisementSection';
import ProductNewsSection from './ProductNewsSection';
import ServiceNewsSection from './ServiceNewsSection';

function News() {
  return (
    <SceneContainer>

      <AdvertisementSection />

      <Divider sx={ { mt: '20px' } } />

      <ProductNewsSection />

      <Divider sx={ { mt: '20px' } } />

      <ServiceNewsSection />

    </SceneContainer>
  );
};

export default News;