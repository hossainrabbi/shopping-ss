import React from 'react';
import { FaCartPlus, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProductsContext } from '../contexts/ProductsContext';
import Rating from './Rating';

export default function Product({ product }) {
  const navigate = useNavigate();
  const {
    productsState: { cart },
    productsDispatch,
  } = useProductsContext();

  const { image, price, title, rating, id } = product;

  const handleAddToCartBtn = () => {
    productsDispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

    toast.success('Add to Cart Successfully!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleIncrement = () => {
    productsDispatch({
      type: 'INCREMENT_QTY',
      payload: product,
    });

    const currentItem = cart.find((cartItem) => cartItem.id === id);

    toast.success(`Added to ${currentItem?.qty} items!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <article className="shadow-sm bg-white rounded-md duration-200 transition-shadow hover:shadow-md">
      <div className="h-72 relative overflow-hidden transition">
        <img className="cover__img object-contain" src={image} alt={title} />
        <div className="absolute right-2 top-2 flex flex-col items-center gap-3 w-10 h-full">
          <button className="btn_icon_round">
            <FaHeart className="w-full text-lg" />
          </button>
          {cart.some((cartItem) => cartItem.id === product.id) ? (
            <button
              className="btn_icon_round"
              onClick={handleIncrement}
              title="Click to Increment items!"
            >
              <FaCartPlus className="w-full text-lg" />
            </button>
          ) : (
            <button
              className="btn_icon_round"
              onClick={handleAddToCartBtn}
              title="Add to Cart"
            >
              <FaShoppingCart className="w-full text-lg" />
            </button>
          )}
          <button
            className="btn_icon_round"
            onClick={() => navigate(`/products/${id}`)}
          >
            <IoEyeSharp className="w-full text-lg" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg text-gray-800">{title}</h4>
        <div className="flex justify-between items-center mt-2">
          <h5 className="text-lg text-orange-500 font-bold">${price}</h5>
          <div className="flex items-center justify-end">
            <Rating rate={rating.rate} />
            <span className="text-gray-500 ml-2">({rating.count})</span>
          </div>
        </div>
      </div>
    </article>
  );
}
