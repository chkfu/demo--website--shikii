// import package
import React from 'react';
// import files
import SectionScrollingIn from '../../components/Animation/SectionScrollingIn';
import FeatureSection from './sections/FeatureSection';
import ExploreSection from './sections/ExploreSection';
import NewsSection from './sections/NewsSection';


// rendering

function Home() {

  return (
    <>
      <FeatureSection />

      <SectionScrollingIn>
        <ExploreSection />
      </SectionScrollingIn>

      <SectionScrollingIn>
        <NewsSection />
      </SectionScrollingIn>

    </>

  );
}

export default Home;