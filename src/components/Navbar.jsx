import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full m-auto h-[80px] bg-[#1F1F1F] text-white flex items-center justify-between  px-10 py-2 '>
        <div className='part1 text-xl font-semibold'>
            <h1>WorldAtlas</h1>  
        </div>
        <div className='part2 w-[25%] flex items-center justify-between'>
            <Link to="/">
            Home
            </Link>

            <Link to="/About">
            About
            </Link>

            <Link to="/country">
            Country
            </Link>

            <Link to="/contact">
            Contact
            </Link>

        </div>


      
    </div>
  )
}

export default Navbar
