import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';
import ProductsContext from '../contexts/ProductsContext';
import Layout from './Layout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleProduct from './pages/SingleProduct';

export default function App() {
  return (
    <ProductsContext>
      <AuthContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </AuthContext>
      <ToastContainer autoClose={1000} />
    </ProductsContext>
  );
}
