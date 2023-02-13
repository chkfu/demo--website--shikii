import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const SectionScrollingIn = ({ children }) => {

  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0, opacity: 1, transition: { type: 'spring', stiffness: '100', duration: 4, delay: 0.5 }
      });
    }
    if (!inView) {
      animation.start({
        x: '-50vw', opacity: 0
      });
    }
  }, [animation, inView]);

  return (
    <>
      <motion.div
        initial={ { x: '-50vw', opacity: '0' } }
        ref={ ref } animate={ animation }>
        { children }
      </motion.div>
    </>
  );
};

export default SectionScrollingIn;