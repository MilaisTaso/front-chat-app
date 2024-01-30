import { createBrowserRouter } from 'react-router-dom';

import { signIn } from '@/lib/firebase/auth';
import { Content } from '@/components/Layout/Content';
import { Button } from '@/components/Elements/Button';
import { LoginPage } from '@/features/auth/routes/login';

const router = createBrowserRouter([
  {
    path: '/',
    element:<LoginPage />,
  },
]);

export default router;
