import React from 'react';

import AnimFade from '@/components/features/animation/AnimFade';
import Songs from '@/components/features/my-songs/Songs';

const page = () => {
  return (
    <div className="min-h-screen text-center relative page-container ">
      <div className="section-heading-hand2">MY SONGS</div>
      <AnimFade
        direction="left"
        className="flex flex-col gap-3 text-left fluid-container"
      >
        <p>
          🌟 My obsession for music does not merely sway upon the dancing notes on the
          strings of my violin; it pulses within my desire to create those beautiful
          melodies, weaving stories from the depths of my heart. Since childhood, I have
          immersed myself in a wide range of musical genres—from the solemnity of
          classical music, the elegance of VPOP and JPOP, to the intense allure of US-UK
          and the electrifying beats of Vocaloid. Each genre is like a unique note in the
          symphony of my life, and each rhythm has nurtured my love for music, making it
          ever deeper, ever richer.
        </p>
        <p>
          💌 Then, at the beginning of 10th grade, I discovered rhythm games like “Project
          Sekai,” where each beat and melody seemed to resonate with my own heartbeat.
          From that moment, my love for music grew boundless, and a fierce determination
          arose within me: I wanted to transform those raw, unharmonised sounds into a
          complete work, filled with spirit and soul.
        </p>
      </AnimFade>
      <div className="fluid-container">
        <Songs />

        <div className="italic text-primary text-9xl font-heading text-center mr-5 h-fit leading-3 pt-20 py-8">
          &quot;
        </div>

        <AnimFade direction="up" className="text-justify bg-white shadow-lg p-8">
          🌼 For me, music is far more than an art form or mere entertainment. It is a
          driving force, an invisible thread that binds people together, regardless of
          age, gender, or background. Through every note, I hope people can come together,
          resonating in a harmony of colors, and building a world filled with warmth and
          unity. Music is like a miracle—a gift I long to share with everyone. It’s this
          vision that inspires me to keep composing, to paint vibrant pictures woven with
          magical melodies.
        </AnimFade>
      </div>
    </div>
  );
};

export default page;
