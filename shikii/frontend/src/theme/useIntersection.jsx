import React, { useEffect } from "react";

export const useIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      QueryObserver.observe(entry);
    }
  });
};