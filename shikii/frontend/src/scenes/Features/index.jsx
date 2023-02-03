// from package
import React, { useContext } from 'react';
import { Box, Stack, Button, Typography, FormControl, InputLabel, MenuItem } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
// from file
import { ResponsiveContext } from '../../App';
import SceneContainer from '../../components/Container/SceneContainer';
import './css/features.css';
import AdvertisementSection from './sections/AdvertisementSection';
import NewsSection from './sections/NewsSection';
import ProductSection from './sections/ProductSection';

// rendering

function Feature() {

  const screenWidth = useContext(ResponsiveContext);

  return (
    <SceneContainer>
      <AdvertisementSection />
      <NewsSection />
      <ProductSection />
    </SceneContainer >
  );
}

export default Feature;
