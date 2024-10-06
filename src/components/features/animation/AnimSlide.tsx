'use client';

import React from 'react';

import { HTMLMotionProps, m } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {
  direction: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}

const ANIM_DURATION = 1;
const ANIM_EASE = [0.16, 1, 0.3, 1];
const ANIM_NUMBER = 180;

const AnimSlide = ({ children, direction, delay, ...rest }: Props) => {
  const x = direction === 'left' ? -ANIM_NUMBER : direction === 'right' ? ANIM_NUMBER : 0;
  const y = direction === 'up' ? -ANIM_NUMBER : direction === 'down' ? ANIM_NUMBER : 0;

  return (
    <m.div
      // start on scroll
      initial={{ x, y }}
      whileInView={{ x: 0, y: 0 }}
      transition={{
        duration: ANIM_DURATION,
        ease: ANIM_EASE,
        delay,
      }}
      {...rest}
    >
      {children}
    </m.div>
  );
};

export default AnimSlide;
