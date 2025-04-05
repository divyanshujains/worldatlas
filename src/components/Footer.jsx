import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  return (
    <footer className='w-full h-[120px] bg-[#1F1F1F] flex items-center justify-around px-10 py-4 shadow-md'>
      {/* Location */}
      <div className='flex gap-4 items-center'>
        <i className='ri-map-pin-line text-[#98D3E8] text-3xl'></i>
        <div className='text-white'>
          <h2 className='font-semibold text-lg'>Find us</h2>
          <p className='text-sm text-gray-300'>Pune, Maharashtra</p>
        </div>
      </div>

      {/* Call Us */}
      <div className='flex gap-4 items-center'>
        <i className='ri-cellphone-fill text-[#98D3E8] text-3xl'></i>
        <div className='text-white'>
          <h2 className='font-semibold text-lg'>Call us</h2>
          <p className='text-sm text-gray-300'>+91 756 660 381 68</p>
        </div>
      </div>

      {/* Mail Us */}
      <div className='flex gap-4 items-center'>
        <i className='ri-mail-line text-[#98D3E8] text-3xl'></i>
        <div className='text-white'>
          <h2 className='font-semibold text-lg'>Mail us</h2>
          <p className='text-sm text-gray-300'>Contact@mail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
