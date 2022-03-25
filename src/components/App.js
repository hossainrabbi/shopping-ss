import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';
import Layout from './Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <ProductsContext>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </ProductsContext>
  );
}
