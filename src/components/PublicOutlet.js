import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContextAuth } from '../contexts/AuthContext';

export default function PublicOutlet() {
  const { currentUser } = useContextAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}
