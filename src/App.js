// Main
import React, { useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// CSS
import './style.css';
// Pages
import { Home } from './pages/Home/Home';
import { Music } from './pages/Music/Music';
import { Shows } from './pages/Shows/Shows';
import { Merch } from './pages/Merch/Merch';
import { Cart } from './pages/Cart/Cart';
import { Page404 } from './pages/Page404';
// Cart
import { cartReducer, initialCartState } from './pages/Cart/reducer';
import { CartContext } from './pages/Cart/context';

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
  {
    path: '/merch',
    element: <Merch />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const cartContextValue = {
    state, dispatch,
  };
  return (
    <>
      <CartContext.Provider value={cartContextValue}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </>
  );
}
