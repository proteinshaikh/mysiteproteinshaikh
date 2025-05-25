import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LangToggle from '../utils/LangToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={`${process.env.PUBLIC_URL}/logo-gym.svg`} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold font-[Playfair_Display] text-black">ProteinShaikh</span>
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/articles" className="text-gray-600 hover:text-gray-800">Articles</Link>
          <Link to="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <Link to="/fitness" className="text-gray-600 hover:text-gray-800">Fitness</Link>
          <Link to="/stocks" className="text-gray-600 hover:text-gray-800">Stocks</Link>
          <LangToggle className="mx-auto inline-block" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/about" className="block text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/articles" className="block text-gray-600 hover:text-gray-800">Articles</Link>
          <Link to="/projects" className="block text-gray-600 hover:text-gray-800">Projects</Link>
          <Link to="/contact" className="block text-gray-600 hover:text-gray-800">Contact</Link>
          <Link to="/fitness" className="block text-gray-600 hover:text-gray-800">Fitness</Link>
          <Link to="/stocks" className="block text-gray-600 hover:text-gray-800">Stocks</Link>
          <LangToggle />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
