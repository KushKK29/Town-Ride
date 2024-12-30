import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-32 w-32" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-gray-800 hover:text-yellow-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/terms"
            className="text-gray-800 hover:text-yellow-600 font-medium"
          >
            Terms
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-yellow-600 font-medium"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-yellow-600 font-medium"
          >
            About Us
          </Link>
          {/* Download Button */}
          <a
            href="#"
            className="bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-700 transition"
          >
            Download App
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          {/* Download Button (Mobile View) */}
          <a
            href="#"
            className="bg-yellow-600 text-white px-3 py-1 rounded-md mr-4 hover:bg-yellow-700 transition"
          >
            Download App
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none hover:text-yellow-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/terms"
            className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
            onClick={toggleMenu}
          >
            Terms
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
