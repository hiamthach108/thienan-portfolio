import Image from 'next/image';

import React from 'react';

import AnimSlide from '../animation/AnimSlide';

const HobbiesIntro = () => {
  return (
    <>
      <div className="fluid-container flex gap-10 pb-10 w-full min-h-[72vh] justify-center">
        <AnimSlide
          direction="left"
          className=" text-justify w-[54%] flex flex-col gap-3 h-fit relative z-10"
        >
          <h1 className="section-heading-hand">My Hobbies</h1>
          <p>
            I always immerse myself in the sweet melodies from the violin, as music has
            become the language of my heart. Each time I draw the bow across the strings,
            I not only hear the sound but also feel the deep emotions I want to convey
            through every note.
          </p>
          <p>
            This is how I tell stories, how I share my joys and sorrows with the world.
            After each class, even if it&apos;s just a brief 1-2 hours, I dedicate myself
            entirely to the violin and that burning passion. For me, there is nothing
            happier than using my hands to bring beautiful emotions through each piece of
            music.
          </p>
        </AnimSlide>

        {/* <Image width={64} height={64} src={'/violin-hobbies.png'} alt="Violin" /> */}
      </div>
    </>
  );
};

export default HobbiesIntro;
