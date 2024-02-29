import React from 'react';

import { Logo } from '@/components/Header/Logo';
import { LinkItems, Nav } from './Nav';

export const Header: React.FC = () => {
  const linkItems: LinkItems = {
    links: [
      {
        to: '/',
        className: '',
      },
      {
        to: 'chat',
        className: '',
      },
      {
        to: 'profile',
        className: '',
      },
    ],
  };
  return (
    <header className="flex justify-between items-center bg-gray-950 px-4 py-2 shadow-sm border border-gray-800 text-white">
      <Logo to="/">Front Chat App</Logo>
      <Nav links={linkItems.links} className="" />
    </header>
  );
};
