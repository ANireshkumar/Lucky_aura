import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const luckyLogo = '/assets/lucky_logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 no-underline py-2 px-0 font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-500"
      : "text-gray-600 no-underline py-2 px-0 font-medium relative transition-colors duration-300 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-4 shadow-md border-b border-gray-200 relative z-50">
        
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Mobile Menu Button - Left */}
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo and Company Name - Center */}
          <div className="flex items-center gap-2">
            <img src={luckyLogo} alt="Lucky Logo" className="h-8 w-8 rounded-full" />
            <span className="text-lg font-bold text-gray-800">Luckyaura</span>
          </div>

          {/* Empty div for flex spacing - Right */}
          <div className="w-10"></div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo and Company Name */}
          <h1 className="m-0 flex items-center gap-2 sm:gap-3">
            <img src={luckyLogo} alt="Lucky Logo" className="h-10 w-10 lg:h-12 lg:w-12 rounded-full" />
            <span className="text-xl lg:text-2xl font-bold text-gray-800">Luckyaura</span>
          </h1>

          {/* Desktop Navigation */}
          <ul className="flex list-none m-0 p-0 gap-4 lg:gap-6 mx-auto items-center">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/products" className={navLinkClass}>Products</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            <li className="ml-2 lg:ml-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-7 pr-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32 lg:w-36 text-sm"
                />
                <svg
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 lg:h-4 lg:w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </li>
          </ul>

          {/* Desktop Cart and Login */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Login Button */}
            <Link to="/login" className="text-white bg-blue-500 no-underline px-4 lg:px-6 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-blue-700">Login</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 relative z-40">
          <ul className="space-y-4">
            <li><NavLink to="/" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/products" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
            <li><NavLink to="/about" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/contact" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
            
            {/* Search Bar */}
            <li className="pt-2">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </li>
            
            {/* Cart */}
            <li>
              <Link to="/cart" className="flex items-center justify-between text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Cart</span>
                </div>
                {cartItemCount > 0 && (
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
            
            {/* Login */}
            <li>
              <Link to="/login" className="block text-center text-white bg-blue-500 no-underline px-6 py-2 rounded-full font-medium hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar