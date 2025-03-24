import React from 'react'
import Navbar from '../components/Navbar'
import countryfacts from "../api/CountryData.json"

const About = () => {
  return (
    <div>
      <Navbar />   
    <div className='w-full h-screen py-2 px-2  bg-[#98D3E8] text-black'>
     <h2 className=' text-center py-4 text-4xl font-semibold text-black'>
      Here are the Intresting Facts  <br />
      we're proud of
     </h2>
     <div className=' w-full px-10 py-4 flex flex-wrap gap-6 '>

      {countryfacts.map(function(elem ,idx) {
       return  <div key={idx} className='card w-[300px]  bg-[#1F1F1F]  text-white p-2  rounded flex flex-col gap-2 mr-0.5 '>
        <p className='countryname text-white font-semibold'>{elem.countryName}</p>
        <p>
          <span>Capital:</span>
          <span>{elem.capital}</span>
        </p>
        
        <p>
          <span>Population:</span>
          <span>{elem.population}</span>
        </p>
        
        <p>
          <span>intrestingfact:</span>
          <span>{elem.interestingFact}</span>
        </p>
   
        

      </div>
        
        

      })}

     


     </div>
      
    </div>
   
    </div>
  )
}

export default About
