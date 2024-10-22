import React from 'react';

import AnimText from '@/components/features/animation/AnimText';
import VideoIntro from '@/components/shared/VideoIntro';

const page = () => {
  return (
    <div className="min-h-screen text-center relative">
      <VideoIntro>
        <h1 className="absolute position-center w-fit whitespace-nowrap">
          <AnimText
            text="My Songs"
            className="text-white font-heading uppercase text-3xl md:text-7xl tracking-wider"
          />
        </h1>
      </VideoIntro>
    </div>
  );
};

export default page;
