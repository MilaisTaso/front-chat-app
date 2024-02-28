import React from 'react';

import { Head } from '../Head/Head';
import { Logo } from '@/components/Header/Logo';
import { Nav, NavProps } from './Nav';

export type HeaderProps = {
  headTitle?: string;
  navLinks: NavProps;
};

export const Header: React.FC<HeaderProps> = ({ headTitle, navLinks }) => {
  return (
    <>
      <Head title={headTitle} />
      <header className="flex justify-between items-center bg-gray-950 text-white px-4 py-2">
        <Logo to="/">Front Chat App</Logo>
        <Nav links={navLinks.links} className={navLinks.className} />
      </header>
    </>
  );
};
