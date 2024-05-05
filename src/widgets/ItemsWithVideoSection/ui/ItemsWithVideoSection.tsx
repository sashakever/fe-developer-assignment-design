'use client';

import React, {FC} from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import {LIST} from '../constants';

type Props = {
  className?: string;
};

const ItemsWithVideoSection: FC<Props> = ({className = ''}) => {
  return (
    <section className={clsx('relative w-full py-10 lg:py-20', className)}>
      <div className='absolute left-0 top-0 z-0 h-full w-full'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='h-full w-full object-cover'
          src='/videos/roadmap-video-720.mp4'
        />
      </div>
      <ul className='main-container relative z-10 flex w-full flex-col gap-5'>
        {LIST.map((item) => (
          <li
            className='flex flex-col-reverse overflow-hidden rounded-md bg-[rgba(19,23,29,0.6)] lg:flex-row'
            key={item.id}>
            <div className='flex flex-col gap-4 p-4 lg:p-12'>
              <h3 className='w-full font-monument text-[26px] uppercase leading-[120%] lg:text-[38px]'>
                {item.title}
              </h3>
              <p className='text-lg leading-[130%]'>{item.text}</p>
            </div>
            <div className='relative aspect-[2] w-full shrink-0 lg:aspect-[1.5] lg:w-[32%]'>
              <Image
                className='absolute left-0 top-0 h-full w-full object-cover'
                src={item.image}
                alt={item.title}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemsWithVideoSection;
