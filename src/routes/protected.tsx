import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { ChatPage } from '@/features/chat/routes/Chat';

export const protectedRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
        <ToastContainer position='bottom-center' closeOnClick theme="colored" />
        <ChatPage />
      </ErrorBoundary>
    ),
  },
  {
    path: '/profile',
    element: <div>Profile Page</div>,
  },
]);
