import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useContextAuth } from '../contexts/AuthContext';
import { useProductsContext } from '../contexts/ProductsContext';
import Logo from '../images/logo.png';
import User from '../images/user.jpg';

export default function Navbar() {
  const {
    productsState: { cart },
  } = useProductsContext();

  const { currentUser } = useContextAuth();

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
              className="btn_icon_round hover:text-gray-800 hover:bg-white bg-white mx-3 relative"
            >
              <FaShoppingCart className="text-lg" />
              <span className="btn_icon_round text-xs h-5 w-5 absolute -top-0 -right-1 bg-orange-600 text-white">
                {cart.length}
              </span>
            </NavLink>
            {currentUser ? (
              <button className="btn_icon_round hover:text-gray-800 hover:bg-gray-200 rounded-full mx-3">
                <img className="rounded-full" src={User} alt="user" />
              </button>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
