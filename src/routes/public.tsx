import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@/features/auth/routes/Login';

export const publicRouter = createBrowserRouter([
  {
    path: '/',
    element:<LoginPage />,
  },
]);