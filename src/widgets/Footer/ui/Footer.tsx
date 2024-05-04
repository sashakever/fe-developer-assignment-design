'use client';

import React, {FC} from 'react';

import {NiftablesIcon} from '@/shared/assets';
import {SocialLinks} from '@/shared/ui';
import clsx from 'clsx';

type Props = {
  className?: string;
};

const Footer: FC<Props> = ({className = ''}) => {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx('h-[84px] w-full bg-black pt-4', className)}>
      <div className='main-container flex w-full flex-col-reverse justify-between gap-4 lg:flex-row lg:items-center'>
        <div className='flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:gap-20'>
          <span>{`© Creon ${year}. All rights reserved.`}</span>
          <SocialLinks />
        </div>
        <div className='flex items-center gap-2'>
          <span>Powered by</span>
          <NiftablesIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
