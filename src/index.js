import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import './input.css';

import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartDetailPage from './pages/CartDetailPage';
import CreatePage from './pages/CreatePage';

import Header from './components/Header';
import Footer from './components/Footer';

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
    path:'/products/:id',
    element: <ProductDetailPage />
  },
  {
    path: '/cart',
    element: <CartDetailPage />
  },
  {
    path: '/create',
    element: <CreatePage />
  }
])

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);