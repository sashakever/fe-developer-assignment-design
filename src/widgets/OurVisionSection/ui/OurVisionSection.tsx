'use client';

import React, {FC, useState} from 'react';

import {creonImage} from '@/shared/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui';
import clsx from 'clsx';
import Image from 'next/image';

import {LIST} from '../constants';
import IconWrapper from './IconWrapper';

type Props = {
  className?: string;
};

const OurVisionSection: FC<Props> = ({className = ''}) => {
  const [openItemId, setOpenItemId] = useState<string>('');
  const onValueChange = (id: string) => {
    setOpenItemId(id);
  };

  return (
    <section
      className={clsx(
        'main-container flex w-full flex-col gap-10 py-10 lg:flex-row lg:py-20',
        className,
      )}>
      <div className='h-full w-full'>
        <h2
          className={clsx(
            'mb-8 w-full font-monument text-[26px] uppercase leading-[120%] lg:max-w-[700px]',
            'lg:whitespace-pre-line lg:text-[38px]',
          )}>
          {
            'Our vision is to\n support the innovation\n of AI blockchain projects '
          }
          <span className='text-gradient whitespace-pre-line'>
            {'while prioritizing communities and democratizing\n profits'}
          </span>
        </h2>
        <div className='relative aspect-[1.665] h-full w-full'>
          <Image
            className='absolute top-0 h-full w-full lg:left-[120px]'
            src={creonImage}
            alt='Creon'
          />
        </div>
      </div>
      <div className='w-full shrink-0 lg:max-w-[552px]'>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          onValueChange={onValueChange}>
          {LIST.map((item) => (
            <AccordionItem key={item.id} value={item.id.toString()}>
              <AccordionTrigger>
                <div className='flex items-center gap-8'>
                  <IconWrapper
                    isActive={item.id.toString() === openItemId}
                    icon={<item.icon />}
                  />
                  <p className='whitespace-pre-line text-left font-satoshi text-[22px] font-bold leading-[130%]'>
                    {item.title}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='pl-[132px]'>
                  <p className='text-lg leading-[130%]'>{item.text}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default OurVisionSection;
