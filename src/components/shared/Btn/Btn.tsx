'use client';

import React from 'react';

const Btn = (props: {children: React.ReactNode}) => {
  return <button>{props.children}</button>;
};

export default Btn;
