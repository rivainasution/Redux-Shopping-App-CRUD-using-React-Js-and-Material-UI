import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginLayout, MainLayout } from '../layouts';
import NotFoundPage from '../pages/notFound';

const router = createBrowserRouter([
  {
    path: '/users/*',
    element: <LoginLayout />,
  },
  {
    path: '/*',
    element: <MainLayout />,
  },
  
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
