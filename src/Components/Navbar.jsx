import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#6B9080] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
        <div className='flex space-x-3 items-center'>
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431246/Pasted_image_jqlnuy.png" height-='25px' width='70px' alt="nothing" />
        <h1 className='font-bold text-2xl'>Figro Software Solutions</h1>
      </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white"
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
        <a href="#aboutus" className=' hover:text-white'>About Us</a>
        <a href="#whatwedo" className=' hover:text-white'>What We Do</a>   
        <a href="#services" className=' hover:text-white'> Services</a>
        <a href="" className='button px-4 py-2 bg-white rounded-full font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white hover:font-extrabold duration-300...'>Reach Us</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-[#6B9080] p-4`}
      >
        <a href="#about" className="block text-white py-2">
        About Us
        </a>
        <a href="#" className="block text-white py-2">
          What we do
        </a>
        <a href="#services" className="block text-white py-2">
          Services
        </a>
        <a href="#contact" className="block text-white py-2">
          Reach us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;