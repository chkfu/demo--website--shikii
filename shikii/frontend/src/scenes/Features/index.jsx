// from package
import React, { useContext } from 'react';
// from file
import { ResponsiveContext } from '../../App';
import SceneContainer from '../../components/Container/SceneContainer';
import SectionScrollingIn from '../../components/Animation/SectionScrollingIn';
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

      <SectionScrollingIn>
        <NewsSection />
      </SectionScrollingIn>

      <SectionScrollingIn>
        <ProductSection />
      </SectionScrollingIn>

    </SceneContainer >
  );
}

export default Feature;
