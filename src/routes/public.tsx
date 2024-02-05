import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { LoginPage } from '@/features/auth/routes/login';

export const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallback={<div>Error</div>}>
        <LoginPage />
      </ErrorBoundary>
    ),
  },
]);
