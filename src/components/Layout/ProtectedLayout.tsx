import React from 'react';
import clsx from 'clsx';

import { toast } from 'react-toastify';
import { LayOutProps } from '@/types/components';
import { Header, HeaderProps } from '@/components/Header/Header';
import { Button } from '@/components/Elements/Button';
import { logOut } from '@/lib/firebase/auth';
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
  const mutation = useSignOut();
  const handleSignOut = async () => {
    await mutation.mutateAsync(undefined);

    if (mutation.isError) {
      toast.error('正常にログアウトできませんでした。');
    }
  };
  return (
    <>
      <div>
        <Header {...headerItems}>
          <Button onClick={handleSignOut}>LogOut</Button>
        </Header>
      </div>
      <div className={clsx('mx-auto', className)}>{children}</div>
    </>
  );
};
