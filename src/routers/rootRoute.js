import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { pageRoutes } from './pageRoutes';
import Header from '../components/Header';

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='/dash' />
  },
  {
    path: 'dash',
    element: <Header />,
    children: pageRoutes
  }
]);

export default router;
