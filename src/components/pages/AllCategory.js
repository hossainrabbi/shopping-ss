import React, { useState } from 'react';
import { useProductsContext } from '../../contexts/ProductsContext';
import Product from '../Product';

export default function AllProducts() {
  const [priceChange, setPriceChange] = useState('default');

  const { loading, error, products } = useProductsContext();

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>This is a Server site Error</h4>;

  return (
    <section className="main__container px-2 py-10">
      <div className="mt-5 grid grid-cols-1 gap-x-6 md:grid-cols-4">
        <div className="col-span-1">Lorem ipsum dolor sit amet.</div>
        <div className="col-span-3">
          <div className="bg-white shadow rounded h-12">
            <nav className="flex items-center justify-between h-full px-2">
              <h2>Filter</h2>
              <select
                value={priceChange}
                onChange={(e) => setPriceChange(e.target.value)}
                className="p-2 bg-gray-100 rounded text-gray-800"
              >
                <option value="default">Default</option>
                <option value="lowToHigh">Price (Low to High)</option>
                <option value="highToLow">Price (High to Low)</option>
              </select>
            </nav>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
            {products.length > 0 ? (
              products.map((product) => (
                <Product product={product} key={product.id} />
              ))
            ) : (
              <h4>product not Founded</h4>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
