import React, { useState, useEffect } from 'react';

export const useResponsiveHook = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
    window.removeEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, [screenWidth]);

  return screenWidth;
};
