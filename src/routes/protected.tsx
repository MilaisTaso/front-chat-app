import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { CreateChat } from '@/features/chat/components/CreateChat';

export const protectedRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
        <CreateChat />
      </ErrorBoundary>
    ),
  },
  {
    path: '/profile',
    element: <div>Profile Page</div>,
  },
]);
