import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext';
import Rating from '../Rating';

export default function SingleProduct() {
  const [show, setShow] = useState(false);
  const { loading, error, products } = useProductsContext();
  const { id } = useParams();

  const findProduct = products.find((product) => product.id === parseInt(id));

  console.log(findProduct);

  if (loading) {
    return <div className="main__container">Loading...</div>;
  }

  if (error) {
    return <div className="main__container">Server site Error</div>;
  }

  return (
    <article className="main__container py-10">
      {findProduct ? (
        <div className="grid grid-cols-1 gap-7 items-center md:grid-cols-2">
          <div className="w-full aspect-video">
            <img
              className="cover__img object-contain"
              src={findProduct?.image}
              alt={findProduct?.title}
            />
          </div>
          <div>
            <h4 className="text-gray-800 text-2xl pb-2">
              {findProduct?.title}
            </h4>
            <p className="text-gray-500 my-4">{findProduct?.description}</p>
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-2xl text-orange-500 font-bold">
                ${findProduct?.price}
              </h5>
              <div className="flex items-center justify-end">
                <Rating rate={findProduct?.rating.rate} />
                <span className="text-gray-500 ml-2">
                  ({findProduct?.rating.count})
                </span>
              </div>
            </div>

            <div className="mt-5">
              {show ? (
                <>
                  <button disabled className="btn rounded-l-md w-11">
                    -
                  </button>
                  <button
                    onClick={() => setShow(false)}
                    className="btn border-x-2 border-blue-300"
                  >
                    Remove from Cart
                  </button>
                  <button className="btn rounded-r-md w-11">+</button>
                </>
              ) : (
                <button
                  onClick={() => setShow(true)}
                  className="btn border-x-2 rounded-md border-blue-300"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </article>
  );
}
