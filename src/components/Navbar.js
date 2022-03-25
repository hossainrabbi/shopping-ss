import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

export default function Navbar() {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <nav className="shadow h-16">
      <div className="main__container h-full">
        <div className="flex justify-between items-center h-full ">
          <Link className="h-10" to="/">
            <img className="max-h-full" src={Logo} alt="Logo" />
          </Link>
          <div>
            <NavLink
              className="text-gray-600 px-1 mx-3 transition-colors hover:text-gray-800 last:mr-0"
              to="/login"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login
            </NavLink>
            <NavLink
              className="text-gray-600 px-1 mx-3 transition-colors hover:text-gray-800 last:mr-0"
              to="/signup"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
