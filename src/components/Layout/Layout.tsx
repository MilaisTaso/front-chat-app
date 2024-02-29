import React from 'react';
import clsx from 'clsx';

import { useAtom } from 'jotai';
import { Outlet, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Header } from '@/components/Header/Header';
import { customerAtom } from '@/features/auth/state/use-auth';
import { Head } from '../Head/Head';
import { FCProps } from '@/types/components';
import { ErrorFallback } from '../Error/Fallback';
import { Spinner } from '../Elements/Spinner';

export const Layout: React.FC<FCProps> = ({ className }) => {
  const [customer] = useAtom(customerAtom);
  const location = useLocation();
  const pageTitle = location.pathname.substring(1) || 'Home';
  return (
    <>
      <Head title={pageTitle} />
      {customer && (
        <div className="w-full">
          <Header />
        </div>
      )}
      <ErrorBoundary fallback={<ErrorFallback />}>
        <React.Suspense fallback={<Spinner />}>
          <div className={clsx('mx-auto', className)}>
            <Outlet />
          </div>
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
};
