import { Metadata } from 'next';

import React from 'react';

import { APP_NAME } from '@/config/constants/env.const';

export const metadata: Metadata = {
  title: `Social Activities | ${APP_NAME}`,
  description: 'Nguyen Cao Thien An. Life is but a breeze, so make the most of it',
};

const page = () => {
  return (
    <div className="min-h-screen text-center">
      <h1 className="section-heading underline-after">Social Activities</h1>
    </div>
  );
};

export default page;
