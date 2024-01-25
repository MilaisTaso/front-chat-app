import { createBrowserRouter } from 'react-router-dom';

import { signIn } from '@/lib/firebase/auth';
import { ContentLayout } from '@/components/Layout/Layout';
import { Button } from '@/components/Elements/Button';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ContentLayout title="login">
        <Button onClick={signIn} type='submit'>Google Login</Button>
      </ContentLayout>
    ),
  },
]);

export default router;
