import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@/features/auth/routes/login';

export const publicRouter = createBrowserRouter([
  {
    path: '/',
    element:<LoginPage />,
  },
]);