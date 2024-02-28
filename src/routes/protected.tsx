import { createBrowserRouter, redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import { ChatPage } from '@/features/chat/routes/Chat';
import { logOut } from '@/lib/firebase/auth';

export const protectedRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
        <ChatPage />
      </ErrorBoundary>
    ),
  },
  {
    path: '/profile',
    element: <div>Profile Page</div>,
  },
]);
