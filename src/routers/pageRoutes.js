import React from 'react';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Settings from '../pages/Settngs';

export const pageRoutes = [
  {
    path: '',
    element: <Home />
  },
  {
    path: 'profile',
    element: <Profile />
  },
  {
    path: 'details-images',
    element: <Dashboard />
  },
  {
    path: 'settings',
    element: <Settings />
  }
];
