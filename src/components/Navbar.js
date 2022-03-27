import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useProductsContext } from '../contexts/ProductsContext';
import Logo from '../images/logo.png';

export default function Navbar() {
  const {
    productsState: { cart },
  } = useProductsContext();

  return (
    <nav className="shadow h-16">
      <div className="main__container h-full">
        <div className="flex justify-between items-center h-full ">
          <Link className="h-10" to="/">
            <img className="max-h-full" src={Logo} alt="Logo" />
          </Link>
          <div className="flex items-center">
            <NavLink
              to="/cart"
              className={`${
                cart.length > 0 ? 'text-white bg-blue-600' : undefined
              } btn_icon_round mx-3 relative`}
            >
              <FaShoppingCart className="text-lg" />
              <span className="btn_icon_round text-xs h-5 w-5 absolute -top-1 -right-2 bg-orange-600 text-white">
                {cart.length}
              </span>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'text-blue-800 underline decoration-blue-500 underline-offset-2'
                    : undefined
                } text-gray-600 px-1 mx-3 transition-colors hover:text-gray-800 last:mr-0`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'text-blue-800 underline decoration-blue-500 underline-offset-2'
                    : undefined
                } text-gray-600 px-1 mx-3 transition-colors hover:text-gray-800 last:mr-0`
              }
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
