'use client';

import React, {FC} from 'react';

import {BREAKPOINT_MEDIUM} from '@/shared/constants';
import clsx from 'clsx';
import {useWindowSize} from 'usehooks-ts';

type Props = {
  className?: string;
};

const HeroSection: FC<Props> = ({className = ''}) => {
  const {width} = useWindowSize();

  return (
    <section
      className={clsx(
        'relative h-screen w-full lg:aspect-[1.98] lg:h-auto',
        className,
      )}>
      {width < BREAKPOINT_MEDIUM ? (
        <video
          // autoPlay
          loop
          muted
          playsInline
          className='absolute left-0 top-0 z-0 h-full w-full object-cover'
          src='/videos/main-background-video-mobile.mp4'
        />
      ) : (
        <video
          // autoPlay
          loop
          muted
          playsInline
          className='absolute left-0 top-0 z-0 h-full w-full object-cover'
          src='/videos/main-background-video-desktop.mp4'
        />
      )}
      <div className='main-container relative z-10 flex h-full flex-col items-start justify-end gap-10 pb-10 lg:pb-[102px]'>
        <h1 className='heading lg:whitespace-pre-line'>
          {"The world's first\nplatform for Tokenizing\nAI blockchain projects"}
        </h1>
        <div className='flex flex-col justify-between gap-2 lg:h-12 lg:gap-0'>
          <div className='main-gradient h-[1px] w-full shrink-0' />
          <span className='text-gradient text-lg font-bold leading-[130%] lg:text-[22px]'>
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </span>
          <div className='main-gradient h-[1px] w-full shrink-0' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
