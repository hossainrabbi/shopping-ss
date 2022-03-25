import React, { useContext } from 'react';
import useProducts from '../hooks/useProducts';

const ContextProvider = React.createContext();

export const useProductsContext = () => useContext(ContextProvider);

export default function ProductsContext({ children }) {
  const { loading, error, products } = useProducts();

  const value = {
    loading,
    error,
    products,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}
