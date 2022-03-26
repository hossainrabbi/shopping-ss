import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Rating from './Rating';

export default function Product({ image, price, title, rating }) {
  return (
    <article className="shadow-sm bg-white rounded-md duration-200 transition-shadow hover:shadow-md">
      <div className="h-72 relative overflow-hidden transition">
        <img className="cover__img object-contain" src={image} alt={title} />
        <div className="absolute right-2 top-2 flex flex-col items-center gap-3 w-10 h-full">
          <button className="btn_icon_round">
            <FaHeart className="w-full text-lg" />
          </button>
          <button className="btn_icon_round">
            <FaShoppingCart className="w-full text-lg" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg text-gray-800">{title}</h4>
        <div className="flex justify-between items-center mt-2">
          <h5 className="text-lg text-orange-500 font-bold">${price}</h5>
          <div className="flex items-center justify-end">
            <Rating rate={rating.rate} />
          </div>
        </div>
      </div>
    </article>
  );
}
