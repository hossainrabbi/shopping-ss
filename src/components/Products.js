import React from 'react';
import { useProductsContext } from '../contexts/ProductsContext';
import Product from './Product';

export default function Products() {
  const { loading, error, products } = useProductsContext();

  if (loading) {
    return <div className="main__container">Loading...</div>;
  }

  if (error) {
    return <div className="main__container">Server site Error</div>;
  }

  return products.length > 0 ? (
    <section className="main__container">
      <h2 className="mt-16 mb-8 uppercase text-center text-4xl text-gray-800">
        Products
      </h2>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </section>
  ) : (
    <div className="main__container">Product not Found</div>
  );
}
