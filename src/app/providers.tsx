import React from 'react';

import { LazyMotion, domAnimation } from 'framer-motion';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </>
  );
};

export default AppProvider;
