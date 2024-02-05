import React from 'react';

import { Head } from '../Head/Head';
import { Logo } from '@/components/Header/Logo';
import { Nav, NavProps } from '../Elements/Nav';

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
      <header>
        <Logo />
        <div className='flex gap-1'>
          <Nav links={navLinks.links} className={navLinks.className} />
          {children}
        </div>
      </header>
    </>
  );
};
