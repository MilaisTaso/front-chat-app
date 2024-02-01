import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const protectedRouter = createBrowserRouter([
  {
    path: '/',
    element:<div>Chat Page</div>,
  },
  {
    path: '/profile',
    element: <div>Profile Page</div>
  }
]);
