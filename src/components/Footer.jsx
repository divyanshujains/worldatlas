import React from 'react'
import 'remixicon/fonts/remixicon.css'



const Footer = () => {
  return (
    <footer className='w-full h-[100px] bg-[#1F1F1F] flex items-center justify-around  px-4 py-2 '>
        <div className='location flex gap-2 items-center'>
            <i className="ri-map-pin-line text-[#98D3E8] text-2xl"></i>
                <div className='text-white'>
                    <h2 className='font-semibold'>Find us</h2>
                    <h2>Pune,maharastra</h2>

                </div>
          

        </div>

             <div className='location flex gap-2 items-center'>
            <i className="ri-cellphone-fill text-[#98D3E8] text-2xl"></i>
                <div className='text-white'>
                    <h2 className='font-semibold'>Call us</h2>
                    <h2>+91 756 660 381 68</h2>

                </div>
          

        </div>


             <div className='location flex gap-2 items-center'>
            <i className="ri-mail-line text-[#98D3E8] text-2xl"></i>
                <div className='text-white'>
                    <h2 className='font-semibold'>Mail us</h2>
                    <h2>Contact@mail.com</h2>

                </div>
          

        </div>


    </footer>
  )
}

export default Footer
