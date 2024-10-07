import Image from 'next/image';

import React from 'react';

import AnimSlide from '../animation/AnimSlide';

const AboutWelcome = () => {
  return (
    <div className="w-full pb-20">
      <div className="fluid-container flex gap-10 items-center 2xl:px-24">
        <div className="flex-1">
          <h1 className="section-heading-hand">Welcome to my world</h1>
          <p className="text-justify text-lg mt-6 mb-3 font-normal text-gray-600">
            I always believe that each of us is a precious gem, shining in our own unique
            way and carrying a personality full of colors that no one else has. This very
            difference not only makes life more vibrant but also serves as a powerful
            source of motivation for creative and explosive ideas. This is why I always
            take steps to seek, spread, and illuminate new inspirations.
          </p>
          <p className="text-justify text-lg  font-normal text-gray-600">
            So, let’s embark on an adventure into the colorful world called{' '}
            <span className="text-primary font-bold text-2xl font-heading">Thiên Ân</span>
            , where every step leads you to wonderful surprises waiting ahead!
          </p>
        </div>

        <AnimSlide direction="right" className="w-[40%]">
          <Image
            src={'/about-me/1.jpg'}
            width={800}
            height={600}
            alt="Welcome to my world"
            className="rounded-3xl object-cover object-center w-full h-auto"
          />
        </AnimSlide>
      </div>
    </div>
  );
};

export default AboutWelcome;
