import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ffffff] p-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-1">
        
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <div className="flex space-x-3 items-center">
            <img
              src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1741240845/IMG-20250305-WA0007_1_cmr6am.jpg"
              alt="Logo"
              className="w-24"
            />
            </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex space-x-6 items-center">
          <a href="#aboutus" className="text-lg font-medium hover:text-gray-600">
            About Us
          </a>
          <a href="#whatwedo" className="text-lg font-medium hover:text-gray-600">
            What We Do
          </a>
          <a href="#services" className="text-lg font-medium hover:text-gray-600">
            Services
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-white rounded-full font-bold transition-all hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300"
          >
            Reach Us
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-[#6B9080] p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <a href="#aboutus" className="block text-white py-2">
          About Us
        </a>
        <a href="#whatwedo" className="block text-white py-2">
          What We Do
        </a>
        <a href="#services" className="block text-white py-2">
          Services
        </a>
        <a href="#contact" className="block text-white py-2">
          Reach Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
