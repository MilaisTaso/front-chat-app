import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorFallback } from '@/components/Error/Fallback';
import { queryClient } from '@/lib/query-client';
import { useAuthState } from '@/features/auth/state/use-auth';

type ProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  useAuthState();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.MODE === 'development' && <ReactQueryDevtools />}
            <ToastContainer
              closeOnClick
              theme="colored"
              position="bottom-center"
            />
            {children}
          </QueryClientProvider>
        </HelmetProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default AppProvider;
