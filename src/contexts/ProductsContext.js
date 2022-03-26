import React, { useContext, useReducer } from 'react';
import useProducts from '../hooks/useProducts';
import {
  productsInitialState,
  productsReducer,
} from '../reducer/productsReducer';

const ContextProvider = React.createContext();

export const useProductsContext = () => useContext(ContextProvider);

export default function ProductsContext({ children }) {
  const { loading, error, products } = useProducts();
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );

  const value = {
    loading,
    error,
    products,
    productsState,
    productsDispatch,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}
