// import package
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
// import files
import FeatureSection from './sections/FeatureSection';
import ExploreSection from './sections/ExploreSection';
import NewsSection from './sections/NewsSection';



// rendering

function Home() {

  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: [0.2, 0.99] });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: '0', opacity: '1', transition: { type: 'spring', stiffness: '150', duration: 4 }
      });
    }
    if (!inView) {
      animation.start({
        x: '-50vw', opacity: '0'
      });
    }
  }, [ref, inView]);

  return (
    <>
      <FeatureSection />

      <motion.div
        key='1'
        ref={ ref } animate={ animation }>
        <ExploreSection />
      </motion.div>

      <motion.div>
        <NewsSection />
      </motion.div>

    </>

  );
}

export default Home;