import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">{children}</main>
    </>
  );
}
