'use client';

import React, {FC} from 'react';

import clsx from 'clsx';
import {useIntersectionObserver} from 'usehooks-ts';

type Props = {
  className?: string;
};

const ProfitingThroughSection: FC<Props> = ({className = ''}) => {
  const refVideo = React.useRef<HTMLVideoElement | null>(null);
  const {ref} = useIntersectionObserver({
    threshold: 0.8,
    freezeOnceVisible: true,
    onChange: (isIntersecting) => {
      if (isIntersecting) {
        refVideo.current?.play();
      }
    },
  });

  return (
    <section
      className={clsx('main-container w-full py-10 lg:py-20', className)}>
      <h2 className='heading mb-2'>Profiting Through</h2>
      <p
        className={clsx(
          'text-gradient mb-4 w-full whitespace-pre-line font-monument text-[22px] uppercase leading-[120%]',
          'lg:mb-16 lg:text-right lg:text-[38px]',
        )}>
        AI Innovation & Decentralization
      </p>
      <div className='flex w-full flex-col items-center gap-4 lg:flex-row'>
        <div
          ref={ref}
          className='relative aspect-[1.95] w-full shrink-0 lg:w-[65%]'>
          <video
            ref={refVideo}
            loop
            muted
            playsInline
            className='absolute left-0 top-0 z-0 h-full w-full object-cover'
            src='/videos/creon-logo-1024.mp4'
          />
        </div>

        <div className='flex w-full flex-col gap-4 lg:max-w-[390px] lg:gap-7'>
          <p className='text-[22px] font-bold leading-[130%]'>
            The dynamic community driven business model of the future.
          </p>
          <p className='text-lg leading-[130%]'>
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfitingThroughSection;
