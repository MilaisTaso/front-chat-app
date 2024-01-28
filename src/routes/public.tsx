import { createBrowserRouter } from 'react-router-dom';

import { signIn } from '@/lib/firebase/auth';
import { Content } from '@/components/Layout/Content';
import { Button } from '@/components/Elements/Button';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Content title="login">
        <Button onClick={signIn} type='submit'>Google Login</Button>
      </Content>
    ),
  },
]);

export default router;
