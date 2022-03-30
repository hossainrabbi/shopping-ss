import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';
import ProductsContext from '../contexts/ProductsContext';
import Layout from './Layout';
import AllCategory from './pages/AllCategory';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleProduct from './pages/SingleProduct';
import PrivateOutlet from './PrivateOutlet';
import PublicOutlet from './PublicOutlet';

export default function App() {
  return (
    <ProductsContext>
      <AuthContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/all-category" element={<AllCategory />} />
            <Route path="/*" element={<PublicOutlet />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
            {/* <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} /> */}

            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="products/checkout" element={<Checkout />} />
            </Route>
            {/* <Route path="/products/checkout" element={<Checkout />} /> */}
          </Routes>
        </Layout>
      </AuthContext>
      <ToastContainer autoClose={1000} />
    </ProductsContext>
  );
}
