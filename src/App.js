// Main
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// CSS
import './style.css';
// Pages
import { Home } from './pages/Home/Home';
import { Music } from './pages/Music/Music';
import { Shows } from './pages/Shows/Shows';
import { Page404 } from './pages/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: '/music',
    element: <Music />
  },
  {
    path: '/shows',
    element: <Shows />
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
