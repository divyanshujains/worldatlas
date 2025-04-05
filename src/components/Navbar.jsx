import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='w-full h-[80px] bg-[#1F1F1F] text-white flex items-center justify-between px-10 shadow-md'>
      {/* Logo Section */}
      <div className='flex items-center space-x-2 text-2xl font-bold'>
        
        <h1 className='hover:text-gray-400 transition duration-300'>WorldAtlas</h1>
      </div>

      {/* Navigation Links */}
      <div className='flex space-x-10 text-lg font-medium'>
        <Link to="/" className='hover:text-blue-400 transition duration-300'>Home</Link>
        <Link to="/country" className='hover:text-blue-400 transition duration-300'>Country</Link>
        <Link to="/contact" className='hover:text-blue-400 transition duration-300'>Contact</Link>
        <Link to="/About" className='hover:text-blue-400 transition duration-300'>About us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
