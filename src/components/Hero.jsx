import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-[450px] bg-[#98D3E8] flex items-center justify-center gap-10   '>
        <div className='part1 w-[40%] h-[80%] text-black p-2 flex flex-col  items-start gap-8 mt-4 '>
            <h1 className='text-5xl font-semibold'>Explore the world, one <br /> country at a time.</h1>
             <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, minus earum, quisquam doloribus illo sit.</h1>
               <button className='border-2  rounded inline px-4 py-2 font-semibold '>Start Exploring  </button>
        </div>
         <div className='image w-[40%] h-[80%] bg-green-100 rounded overflow-hidden'>
        <video className='w-full h-full object-cover ' loop muted autoPlay src="/videos/world.gif.mp4"></video>
        </div>
      
    </div>
  )
}

export default Hero
