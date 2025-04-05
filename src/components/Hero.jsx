import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-[450px] bg-[#98D3E8] flex items-center justify-center gap-10 px-10'>
      {/* Text Section */}
      <div className='w-[40%] text-black p-4 flex flex-col items-start gap-6'>
        <h1 className='text-5xl font-bold leading-tight'>
          Explore the world, one <br /> country at a time.
        </h1>
        <p className='text-lg text-gray-800'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, minus earum, quisquam doloribus illo sit.
        </p>
        <button className='bg-white border-2 border-black text-black rounded-lg px-6 py-3 font-semibold shadow-md hover:bg-gray-200 transition duration-300'>
          Start Exploring
        </button>
      </div>
      
      {/* Video Section */}
      <div className='w-[40%] h-[80%] rounded-lg overflow-hidden shadow-lg border-4 border-white'>
        <video className='w-full h-full object-cover' loop muted autoPlay src="/videos/world.gif.mp4"></video>
      </div>
    </div>
  );
};

export default Hero;