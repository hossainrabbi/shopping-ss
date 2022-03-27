import React from 'react';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext';
import Rating from '../Rating';

export default function SingleProduct() {
  const {
    loading,
    error,
    products,
    productsState: { cart },
    productsDispatch,
  } = useProductsContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const findProduct = products.find((product) => product.id === parseInt(id));

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
          <div className="w-full aspect-video relative">
            <button
              className="btn_icon_round absolute left-5 h-12 w-12 text-2xl"
              onClick={() => navigate(-1)}
            >
              <IoReturnUpBackOutline />
            </button>
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
              {cart.some((cartItem) => cartItem.id === findProduct.id) ? (
                <button
                  onClick={() =>
                    productsDispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: findProduct,
                    })
                  }
                  className="btn border-x-2 border-blue-300"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    productsDispatch({
                      type: 'ADD_TO_CART',
                      payload: findProduct,
                    })
                  }
                  className="btn border-x-2 border-blue-300"
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
