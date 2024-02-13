import { createBrowserRouter } from 'react-router-dom';
import { CreateChat } from '@/features/chat/components/CreateChat';

export const protectedRouter = createBrowserRouter([
  {
    path: '/',
    element:<CreateChat />,
  },
  {
    path: '/profile',
    element: <div>Profile Page</div>
  }
]);
