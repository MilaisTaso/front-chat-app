import React from 'react';
import clsx from 'clsx';

import { LayOutProps } from '@/types/components';
import { Header, HeaderProps } from '@/components/Header/Header';
import { Button } from '@/components/Elements/Button';
import { logOut } from '@/lib/firebase/auth';

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
      <div>
        <Header {...headerItems}>
          <Button onClick={logOut}>LogOut</Button>
        </Header>
      </div>
      <div className={clsx('mx-auto', className)}>{children}</div>
    </>
  );
};
