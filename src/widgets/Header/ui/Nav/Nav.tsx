'use client';

import React, {FC} from 'react';

import {MENU_ITEMS} from '@/shared/constants';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Nav: FC<Props> = ({className = ''}) => {
  return (
    <nav
      className={clsx(
        'flex w-full flex-col lg:w-auto lg:flex-row lg:gap-10',
        className,
      )}>
      {MENU_ITEMS.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'h-[54px] w-full border-t border-white border-opacity-10 last:border-b lg:h-auto lg:w-auto',
            'flex items-center lg:border-0 lg:last:border-0',
          )}>
          <Link href={item.href} className='flex items-start gap-1'>
            <span className='font-satoshi text-base font-bold leading-[110%] lg:text-lg'>
              {item.label}
            </span>
            {item.badge ? (
              <div className='rounded-full bg-black px-1 py-0.5 text-[10px] font-bold uppercase leading-[110%] text-[#AB23FF]'>
                {item.badge}
              </div>
            ) : null}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
