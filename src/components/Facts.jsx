import React from 'react'
import countryfacts from "../api/CountryData.json"


const Facts = () => {
  return (
    <>
    <div className='w-full h-full py-2 px-2  bg-[#98D3E8] text-black'>
     <h2 className=' text-center py-4 text-4xl font-semibold text-black'>
      Here are the Intresting Facts  <br />
      we're proud of
     </h2>
   <div className='w-full px-10 py-6 flex flex-wrap  justify-center bg-[#98D3E8]'>
  {countryfacts.map((elem, idx) => (
    <div 
      key={idx} 
      className='card w-[280px] bg-[#1F1F1F] text-white p-4 m-2 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300'
    >
      <p className='countryname text-white font-bold text-lg border-b border-gray-600 pb-2'>{elem.countryName}</p>
      <div className='mt-3 space-y-2 text-gray-300'>
        <p className='flex justify-between '><span className='font-semibold'>Capital:</span> <span>{elem.capital}</span></p>
        <p className='flex justify-between'><span className='font-semibold'>Population:</span> <span>{elem.population}</span></p>
        <p className='flex justify-between'><span className='font-semibold text-sm '>FACTS: </span> <span className='text-sm italic '>{elem.interestingFact}</span></p>
      </div>
    </div>
  ))}
</div>

      
    </div>
    </>
  )
}

export default Facts
