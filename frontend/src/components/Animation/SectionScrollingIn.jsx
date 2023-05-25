import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


// animations
const animate_fadein = {
  x: 0,
  opacity: 1,
  transition: {
    type: 'spring',
    stiffness: '100',
    duration: 4,
    delay: 0.5
  }
};

const animate_fadeout = {
  x: '-50vw',
  opacity: 0
};

const animate_initial = {
  x: '-50vw',
  opacity: '0'
};

// rendering
const SectionScrollingIn = ({ children }) => {

  // react intersection observer
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  // useEffect tracking y-axis for animate activation
  useEffect(() => {
    if (inView) {
      animation.start(animate_fadein);
    }
    if (!inView) {
      animation.start(animate_fadeout);
    }
  }, [animation, inView]);

  // render
  return (
    <>
      <motion.div
        initial={ animate_initial }
        ref={ ref }
        animate={ animation }>
        { children }
      </motion.div>
    </>
  );
};

export default SectionScrollingIn;