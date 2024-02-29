import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { toast } from 'react-toastify';
import { AuthError } from 'firebase/auth';
import { ErrorFallback } from '@/components/Error/Fallback';
import { Spinner } from '@/components/Elements/Spinner';
import { ChatPage } from '@/features/chat/routes/Chat';
import { ErrorPage } from '@/components/Error/Error';
import { LoginPage } from '@/features/auth/routes/Login';
import { Layout } from '@/components/Layout/Layout';
import { logOut } from '@/lib/firebase/auth';

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      id: 'root',
      path: '/',
      errorElement: <ErrorPage />,
      Component: Layout,
      children: [
        {
          index: true,
          Component: LoginPage,
        },
        {
          path: 'chat',
          Component: ChatPage,
        },
        {
          path: 'logout',
          async action() {
            try {
              await logOut();
              toast.success('ログアウトしました');
              return redirect('/');
            } catch (error: unknown) {
              toast.error('ログアウトに失敗しました');
              throw error as AuthError;
            }
          },
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ErrorBoundary>
  );
};
