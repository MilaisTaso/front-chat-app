import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { LoginPage } from '@/features/auth/routes/Login';

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
