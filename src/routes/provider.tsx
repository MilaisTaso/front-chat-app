import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAtom } from 'jotai';

import { ErrorBoundary } from 'react-error-boundary';
import { publicRouter } from './public';
import { protectedRouter } from './protected';
import { customerAtom } from '@/features/auth/state/use-auth';
import { ErrorFallback } from '@/components/Error/Fallback';
import { Spinner } from '@/components/Elements/Spinner';

export const AppRoutes = () => {
  const [customer] = useAtom(customerAtom);
  const router = customer ? protectedRouter : publicRouter;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ErrorBoundary>
  );
};
