import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import routes from './routers/rootRoute';

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
