import React from 'react';
import { useProductsContext } from '../../contexts/ProductsContext';

export default function Cart() {
  const {
    productsState: { cart },
  } = useProductsContext();

  return (
    <section className="main__container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <table className="col-span-2 table-fixed w-full border">
          <thead>
            <tr className="border">
              <th className="cart_item">Item</th>
              <th className="cart_item">Name</th>
              <th className="cart_item">Price</th>
              <th className="cart_item">Qty</th>
              <th className="cart_item">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((cartItem) => (
                <tr className="border" key={cartItem.id}>
                  <td className="cart_item">
                    <img
                      className="h-24"
                      src={cartItem.image}
                      alt={cartItem.title}
                    />
                  </td>
                  <td className="cart_item">{cartItem.title}</td>
                  <td className="cart_item text-center">${cartItem.price}</td>
                  <td className="cart_item">
                    <div className="flex">
                      <button className="btn rounded-none rounded-l-md w-11">
                        -
                      </button>
                      <button
                        disabled
                        className="btn rounded-none border-x-2 px-5 border-blue-300"
                      >
                        {cartItem?.qty}
                      </button>
                      <button className="btn rounded-none rounded-r-md w-11">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="cart_item text-center">
                    ${Math.round(cartItem.price * cartItem?.qty * 1000) / 1000}
                  </td>
                </tr>
              ))
            ) : (
              <div>No items available</div>
            )}
          </tbody>
        </table>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          accusamus!
        </div>
      </div>
    </section>
  );
}
