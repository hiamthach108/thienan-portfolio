import Image from 'next/image';

import React from 'react';

import AnimSlide from '../animation/AnimSlide';

const HobbiesSports = () => {
  return (
    <div className="w-full">
      <div className="fluid-container pb-16">
        <h2 className="section-heading text-center">​MY FAVORITE SPORTS</h2>
        <AnimSlide
          direction="left"
          className="flex-1 bg-white p-3 xl:p-8 shadow-2xl mt-6"
        >
          <div className="flex gap-6 items-center  flex-col">
            <div className="flex-1 text-justify">
              <p className="">
                I am passionate about running because it is not just a sport, but a
                journey of self-discovery. When I run, I can feel every beat of my heart
                and the exhilaration of my body, which helps to relieve all the stress in
                my mind.
              </p>
              <p>
                Running is an endless source of inspiration, awakening in me a spirit of
                perseverance and endurance. Every step is not just a run but also a battle
                with myself, helping me to break through my limits and feel the latent
                strength within. Through each conquered distance, I realize that
                confidence and willpower will always accompany me on every path I take.
              </p>
            </div>

            <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-3">
              <Image
                src={'/hobbies/1.jpg'}
                alt="hobbies"
                width={400}
                height={300}
                className="object-center object-cover w-full h-full"
              />
              <Image
                src={'/hobbies/2.jpg'}
                alt="hobbies"
                width={400}
                height={300}
                className="object-center object-cover w-full h-full"
              />
              <Image
                src={'/hobbies/3.jpg'}
                alt="hobbies"
                width={400}
                height={300}
                className="object-center object-cover w-full h-auto"
              />
            </div>
          </div>
        </AnimSlide>
      </div>
    </div>
  );
};

export default HobbiesSports;
