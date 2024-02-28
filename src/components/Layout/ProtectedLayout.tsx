import React from 'react';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { LayOutProps } from '@/types/components';
import { Header, HeaderProps } from '@/components/Header/Header';
import { Button } from '@/components/Elements/Button';
import { useSignOut } from '@/features/auth/api/auth';

const headerItems: HeaderProps = {
  navLinks: {
    links: [
      {
        to: '/',
        className: 'text-red',
        children: 'Top',
      },
    ],
    className: 'bg-blue',
  },
  headTitle: 'Chat',
};

export const ProtectedLayout: React.FC<LayOutProps> = ({
  className,
  children,
}) => {
  return (
    <>
      <div className='w-full'>
        <Header {...headerItems} />
      </div>
      <div className={clsx('mx-auto', className)}>{children}</div>
    </>
  );
};
