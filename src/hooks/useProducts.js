import { useEffect, useState } from 'react';

export default function useProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchFunction = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setError(false);
      setProducts(data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return {
    loading,
    error,
    products,
  };
}
