import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProductsContext } from '../../contexts/ProductsContext';
import emptyCart from '../../images/empty-cart.jpg';
import NotFound from '../NotFound';
import TotalCart from '../TotalCart';

export default function Cart() {
  const {
    productsState: { cart },
    productsDispatch,
  } = useProductsContext();

  const subtotalAll =
    Math.round(
      cart.reduce((acc, current) => acc + current.price * current?.qty, 0) *
        1000
    ) / 1000;

  return (
    <section className="main__container py-10">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="col-span-2 w-full overflow-x-auto">
            <table className="w-full border">
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
                {cart.map((cartItem) => (
                  <tr className="border" key={cartItem.id}>
                    <td className="cart_item">
                      <img
                        className="h-24 object-contain"
                        src={cartItem.image}
                        alt={cartItem.title}
                      />
                    </td>
                    <td className="cart_item">
                      <Link
                        className="cursor-pointer hover:underline"
                        to={`/products/${cartItem.id}`}
                      >
                        {cartItem.title}
                      </Link>
                    </td>
                    <td className="cart_item text-center">${cartItem.price}</td>
                    <td className="cart_item">
                      <div className="flex">
                        <button
                          disabled={cartItem?.qty <= 1}
                          className="btn rounded-none rounded-l-md px-5 w-11"
                          onClick={() =>
                            productsDispatch({
                              type: 'DECREMENT_QTY',
                              payload: cartItem,
                            })
                          }
                        >
                          -
                        </button>
                        <button
                          disabled
                          className="btn rounded-none border-x-2 px-5 
                        disabled:text-gray-800 disabled:bg-transparent"
                        >
                          {cartItem?.qty}
                        </button>
                        <button
                          className="btn rounded-none rounded-r-md px-5 w-11"
                          onClick={() =>
                            productsDispatch({
                              type: 'INCREMENT_QTY',
                              payload: cartItem,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="cart_item text-center relative">
                      $
                      {Math.round(cartItem.price * cartItem?.qty * 1000) / 1000}
                      <button
                        className="btn_icon_round absolute top-1 right-1 text-xl"
                        onClick={() => {
                          productsDispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: cartItem,
                          });

                          toast.error(`Remove: ${cartItem.title}!`, {
                            position: toast.POSITION.TOP_RIGHT,
                          });
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <TotalCart subtotalAll={subtotalAll} />
        </div>
      ) : (
        <NotFound
          text="You have no items in your shopping cart."
          image={emptyCart}
        />
      )}
    </section>
  );
}
