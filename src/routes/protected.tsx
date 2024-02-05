import { createBrowserRouter } from 'react-router-dom';
import { ChatPage } from '@/features/chat/routes/Chat';

export const protectedRouter = createBrowserRouter([
  {
    path: '/',
    element:<ChatPage />,
  },
  {
    path: '/profile',
    element: <div>Profile Page</div>
  }
]);
