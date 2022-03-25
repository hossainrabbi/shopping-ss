import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}
