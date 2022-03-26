import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleProduct from './pages/SingleProduct';

export default function App() {
  return (
    <ProductsContext>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </ProductsContext>
  );
}
