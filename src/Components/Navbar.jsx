// creating the nav bar 

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import luckyLogo from '../assets/lucky_logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
<>
<div className="flex items-center justify-between bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-4 shadow-md border-b border-gray-200">
  {/* Logo and Company Name */}
  <h1 className="m-0 flex items-center gap-2 sm:gap-3">
    <img src={luckyLogo} alt="Lucky Logo" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full" />
    <span className="text-lg sm:text-xl lg:text-xl font-bold text-gray-800 hidden sm:block">Luckyaura</span>
  </h1>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex list-none m-0 p-0 gap-4 lg:gap-6 mx-auto items-center">
    <li><Link to="/" className="text-gray-600 no-underline py-2 px-0 font-medium relative transition-colors duration-300 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Home</Link></li>
    <li><Link to="/products" className="text-gray-600 no-underline py-2 px-0 font-medium relative transition-colors duration-300 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Products</Link></li>
    <li><Link to="/about" className="text-gray-600 no-underline py-2 px-0 font-medium relative transition-colors duration-300 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">About</Link></li>
    <li><Link to="/Contact" className="text-gray-600 no-underline py-2 px-0 font-medium relative transition-colors duration-300 hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Contact</Link></li>
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

  {/* Desktop Login Button */}
  <div className="hidden md:block ml-auto">
    <Link to="/login" className="text-white bg-blue-500 no-underline px-4 lg:px-6 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-blue-700">Login</Link>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden ml-auto p-2 rounded-md hover:bg-gray-100"
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
</div>

{/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
    <ul className="space-y-4">
      <li><Link to="/" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
      <li><Link to="/products" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
      <li><Link to="/about" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>About</Link></li>
      <li><Link to="/Contact" className="block text-gray-600 no-underline py-2 font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
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