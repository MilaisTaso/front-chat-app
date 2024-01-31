import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Button } from './components/Elements/Button';
import { queryClient } from '@/lib/query-client';
import router from './routes/public';
import { useAuthState } from './features/auth/state/auth';

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

const App: React.FC = () => {
  useAuthState();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.MODE === 'development' && <ReactQueryDevtools />}
            <RouterProvider router={router} />
          </QueryClientProvider>
        </HelmetProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
