import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useContextAuth } from '../contexts/AuthContext';

export default function PublicRoute({ children, ...rest }) {
  const { currentUser } = useContextAuth();
  const location = useLocation();

  if (!currentUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
}
