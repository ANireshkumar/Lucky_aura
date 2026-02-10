import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-colors duration-300 ${
      isActive
        ? "text-green-700"
        : "text-gray-600 hover:text-green-700"
    }`;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/lucky_logo.jpg"
              alt="Lucky Aura Logo"
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-full ring-2 ring-green-600/30"
            />
            <span className="hidden sm:block text-xl font-bold text-gray-800">
              Lucky Aura
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 mx-auto">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navLinkClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <input
              type="text"
              placeholder="Search…"
              className="w-36 px-4 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <Link
              to="/login"
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full font-semibold transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2 rounded-md hover:bg-green-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-200 shadow-md">
          <div className="px-6 py-6 space-y-5">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block font-medium text-gray-700 hover:text-green-700"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="block font-medium text-gray-700 hover:text-green-700"
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block font-medium text-gray-700 hover:text-green-700"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block font-medium text-gray-700 hover:text-green-700"
            >
              Contact
            </Link>

            <input
              type="text"
              placeholder="Search…"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-semibold transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
