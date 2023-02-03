// import package
import React, { useContext } from 'react';
// import files
import FeatureSection from './sections/FeatureSection';
import ExploreSection from './sections/ExploreSection';
import NewsSection from './sections/NewsSection';

function Home() {
  return (
    <>
      <FeatureSection />
      <ExploreSection />
      <NewsSection />
    </>

  );
}

export default Home;