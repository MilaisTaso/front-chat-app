import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ChatPage } from '@/features/chat/routes/Chat';
import { ErrorPage } from '@/components/Error/Error';

export const protectedRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
        <ChatPage />
      </ErrorBoundary>
    ),
  },
  {
    path: 'profile',
    element: <div>Profile Page</div>,
  },
]);
