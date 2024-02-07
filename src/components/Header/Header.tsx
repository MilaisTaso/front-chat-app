import React from 'react';

import { Head } from '../Head/Head';
import { Logo } from '@/components/Header/Logo';
import { Nav, NavProps } from './Nav';

export type HeaderProps = {
  headTitle?: string;
  children?: React.ReactNode;
  navLinks: NavProps;
};

export const Header: React.FC<HeaderProps> = ({
  headTitle,
  children,
  navLinks,
}) => {
  return (
    <>
      <Head title={headTitle} />
      <header className='flex justify-between'>
        <Logo />
        <div className='flex gap-1 items-center'>
          <Nav links={navLinks.links} className={navLinks.className} />
          {children}
        </div>
      </header>
    </>
  );
};
