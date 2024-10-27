import React, { ReactNode } from 'react';

const VideoIntro = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="relative h-screen w-full object-cover object-center">
      <video autoPlay loop muted className="w-full h-full object-cover object-center">
        <source
          src="https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/thienan.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay z-10 bg-black bg-opacity-20 w-full h-full absolute left-0 right-0 top-0"></div>

      {children}
    </div>
  );
};

export default VideoIntro;
