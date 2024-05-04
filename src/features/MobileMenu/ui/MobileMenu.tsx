'use client';

import React, {
  FC,
  Fragment,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import {Button, SocialLinks} from '@/shared/ui';
import {Dialog, Transition} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {usePathname, useSearchParams} from 'next/navigation';

export const MobileMenu: FC<PropsWithChildren> = ({children}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const closeMobileMenu = () => setIsOpen(false);
  const toggleMobileMenu = () => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const bodyChildren: HTMLCollection = document.body.children;
        const bodyChildrenArray = Array.from(bodyChildren);
        bodyChildrenArray.forEach((child) => {
          if (child.hasAttribute('inert')) child.removeAttribute('inert');
        });
      }, 50);
    }
  }, [isOpen]);

  return (
    <>
      <Button
        className='aspect-square p-0 lg:hidden'
        variant='secondary'
        onClick={toggleMobileMenu}>
        {isOpen ? (
          <XMarkIcon className='h-6 stroke-white' />
        ) : (
          <Bars3Icon className='h-4 stroke-white' />
        )}
      </Button>

      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className='relative z-50'>
          <Transition.Child
            as={Fragment}
            enter='transition-all ease-in-out duration-300'
            enterFrom='opacity-0 backdrop-blur-none'
            enterTo='opacity-100 backdrop-blur-[.5px]'
            leave='transition-all ease-in-out duration-200'
            leaveFrom='opacity-100 backdrop-blur-[.5px]'
            leaveTo='opacity-0 backdrop-blur-none'>
            <div
              className='fixed inset-0 bg-[rgba(13,19,28,0.7)] blur-[5px]'
              aria-hidden='true'
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition-all ease-in-out duration-300'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition-all ease-in-out duration-200'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'>
            <Dialog.Panel className='fixed inset-y-0 right-0 flex size-full w-[210px] bg-black backdrop-blur-xl'>
              <div className='flex h-full flex-col items-start justify-between pb-[30px] pl-[30px] pt-20'>
                {children}
                <SocialLinks />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
