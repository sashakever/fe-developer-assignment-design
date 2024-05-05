'use client';

import React, {FC, Suspense, useRef} from 'react';

import {MobileMenu} from '@/features';
import {LogoIcon} from '@/shared/assets';
import {Button} from '@/shared/ui';
import clsx from 'clsx';
import {useEventListener} from 'usehooks-ts';

import Nav from './Nav';

type Props = {
  className?: string;
};

const Header: FC<Props> = ({className = ''}) => {
  const refHeader = useRef<HTMLElement | null>(null);
  const onScroll = () => {
    if (refHeader.current === null) return;
    if (window.scrollY > 300) {
      refHeader.current.style.backgroundColor = '#000000';
    } else {
      refHeader.current.style.backgroundColor = 'transparent';
    }
  };
  useEventListener('scroll', onScroll);

  return (
    <header
      ref={refHeader}
      className={clsx(
        'fixed z-[100] flex h-20 w-full items-center justify-between px-[15px] lg:h-[104px] lg:px-[50px]',
        'transition-all duration-300',
        className,
      )}>
      <LogoIcon className='w-[120px] lg:w-[140px]' />
      <div className='flex w-[195px] items-center pl-[30px] md:gap-14 lg:w-auto lg:pl-0'>
        <Nav className='hidden lg:flex' />
        <Button className='mr-4 w-full lg:mr-0 lg:w-auto' variant='border'>
          Connect
        </Button>
        <Suspense>
          <MobileMenu>
            <Nav />
          </MobileMenu>
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
