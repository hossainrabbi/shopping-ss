import React from 'react';
import { useProductsContext } from '../contexts/ProductsContext';

export default function TotalCart({ subtotalAll }) {
  const {
    productsState: { cart },
  } = useProductsContext();

  return (
    <article className="w-full">
      <div className="border flex justify-between items-center">
        <span className="cart_item font-semibold">My Cart :</span>
        <span className="cart_item font-semibold">{cart?.length} (items)</span>
      </div>
      <div className="border border-t-0">
        <div className="flex justify-between items-center">
          <span className="cart_item">Subtotal :</span>
          <span className="cart_item">${subtotalAll}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="cart_item">Tax :</span>
          <span className="cart_item">
            ${Math.round(subtotalAll * 0.1 * 100) / 100}
          </span>
        </div>
        <div className="flex border-t justify-between items-center">
          <span className="cart_item font-semibold">Total :</span>
          <span className="cart_item font-semibold">
            ${Math.round(subtotalAll * (1 + 0.1) * 100) / 100}
          </span>
        </div>
      </div>
    </article>
  );
}
