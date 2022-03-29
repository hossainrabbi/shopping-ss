import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { useContextAuth } from '../contexts/AuthContext';
import { useProductsContext } from '../contexts/ProductsContext';
import User from '../images/guest-avatar.jpg';
import Logo from '../images/logo.png';

export default function Navbar() {
  const {
    productsState: { cart },
  } = useProductsContext();

  const { currentUser, logout } = useContextAuth();

  console.log(currentUser);

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
              <div className="flex items-center">
                <button className="btn_icon_round hover:text-gray-800 h-12 w-12 hover:bg-gray-200 rounded-full ml-3">
                  <img
                    className="rounded-full"
                    src={currentUser.photoURL || User}
                    alt={currentUser.displayName}
                  />
                </button>
                <span>{currentUser.displayName}</span>
                <button
                  className="btn_icon_round hover:text-gray-800 hover:bg-white px-0 mx-0 bg-white"
                  onClick={logout}
                >
                  <FiLogOut className="text-lg" />
                </button>
              </div>
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
