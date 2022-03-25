import React from 'react';

export default function Product({ image, price, title, rating }) {
  return (
    <article className="shadow-sm bg-white rounded-md duration-200 transition-shadow hover:shadow-md">
      <div className="h-72">
        <img className="cover__img object-contain" src={image} alt={title} />
      </div>
      <div className="p-4">
        <h4 className="text-md text-gray-800">{title}</h4>
        <div className="flex justify-between items-center mt-2">
          <h5 className="text-lg text-orange-500 font-bold">${price}</h5>
          <h5 className="text-lg text-orange-500">{rating.rate}</h5>
        </div>
      </div>
    </article>
  );
}
