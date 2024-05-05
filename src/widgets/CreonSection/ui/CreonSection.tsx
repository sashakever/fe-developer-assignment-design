'use client';

import React, {FC} from 'react';

import {Button, Divider} from '@/shared/ui';
import clsx from 'clsx';
import {useIntersectionObserver} from 'usehooks-ts';

import {LIST} from '../constants';

type Props = {
  className?: string;
};

const CreonSection: FC<Props> = ({className = ''}) => {
  const refVideo = React.useRef<HTMLVideoElement | null>(null);
  const {ref} = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
    onChange: (isIntersecting) => {
      if (isIntersecting) {
        refVideo.current?.play();
      }
    },
  });

  return (
    <section
      className={clsx(
        'main-container flex w-full flex-col-reverse items-center py-10 lg:flex-row lg:py-20',
        className,
      )}>
      <div className='flex w-full flex-col lg:mr-11'>
        <h2 className='heading mb-5'>creon pass nft</h2>
        <Divider className='mb-5' />
        <p className='text-gradient mb-5 text-lg font-bold leading-[130%] lg:whitespace-pre-line lg:text-[22px]'>
          {`The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools`}
        </p>
        <ul className='mb-10 flex flex-col gap-2.5'>
          {LIST.map((item) => (
            <li
              key={item.id}
              className={clsx(
                'w-fit rounded-md border border-[#13171D] px-4 pb-4 pt-3',
                'text-lg leading-[130%]',
              )}>
              {item.label}
            </li>
          ))}
        </ul>

        <Button className='main-gradient h-14 lg:max-w-[453px]' variant='ghost'>
          <span className='text-lg font-bold'>Buy Creon Pass</span>
        </Button>
      </div>
      <div
        ref={ref}
        className='relative mb-10 aspect-square w-full shrink-0 lg:mb-0 lg:w-[56%]'>
        <video
          ref={refVideo}
          loop
          muted
          playsInline
          className='absolute left-0 top-0 z-0 h-full w-full object-contain'
          src='/videos/nft-video-720.mp4'
        />
      </div>
    </section>
  );
};

export default CreonSection;
