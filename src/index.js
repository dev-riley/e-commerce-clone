import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage';
import CartDetailPage from './pages/CartDetailPage';

const container = document.getElementById('root')
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/products',
    element: <ProductListPage />
  },
  {
    path:'/products/:productId',
    element: <ProductDetailPage />
  },
  {
    path: '/cart',
    element: <CartDetailPage />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);